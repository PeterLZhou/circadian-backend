import * as moment from 'moment';
import * as querystring from 'querystring';
import axios from 'axios';
import { access } from 'fs';
import { prisma } from '../../generated/prisma-client';
import { refreshToken } from './refresh';

// Date is yyyy-MM-dd
export const getSleepLogs = async (userId: string, date: string) => {
  // const id = await user.id();
  // console.log(id);
  const fitbitAccount = await prisma.user({ id: userId }).fitbitAccount();
  const fitbitUserId = fitbitAccount.fitbitUserId;
  let accessToken = fitbitAccount.accessToken;
  if (new Date(fitbitAccount.expiration).getTime() < new Date().getTime()) {
    console.log("expired token");
    let newTokens = await refreshToken(
      fitbitAccount.id,
      fitbitAccount.refreshToken
    );
    accessToken = newTokens.accessToken;
  }

  const response = await axios.get(
    `https://api.fitbit.com/1.2/user/${fitbitUserId}/sleep/date/${date}.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  response.data.sleep.forEach((sleepLog: any) => {
    createSleepLog(userId, sleepLog);
  });

  return response;
};

export const getAllUpdatedSleepLogs = async (userId: string) => {
  const fitbitAccount = await prisma.user({ id: userId }).fitbitAccount();
  if (!fitbitAccount) {
    return;
  }
  const sleepLogLastUpdatedDate = await prisma
    .user({ id: userId })
    .sleepLogLastUpdatedDate();
  const fitbitUserId = fitbitAccount.fitbitUserId;
  let accessToken = fitbitAccount.accessToken;
  if (new Date(fitbitAccount.expiration).getTime() < new Date().getTime()) {
    let newTokens = await refreshToken(
      fitbitAccount.id,
      fitbitAccount.refreshToken
    );
    accessToken = newTokens.accessToken;
  }
  const earliestDate = sleepLogLastUpdatedDate
    ? moment(sleepLogLastUpdatedDate).format("YYYY-MM-DDTHH:mm:ss")
    : moment()
        .subtract(31, "days")
        .format("YYYY-MM-DD");

  // TODO will only get 100, need to get everything
  let nextLink = `https://api.fitbit.com/1.2/user/${fitbitUserId}/sleep/list.json?afterDate=${earliestDate}&sort=asc&offset=0&limit=100`;
  let latestDate = "2007-03-26";
  while (nextLink) {
    try {
      const response = await axios.get(nextLink, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      response.data.sleep.forEach((sleepLog: any) => {
        createSleepLog(userId, sleepLog);
      });

      if (response.data.sleep.levels) {
        response.data.sleep.levels.data.forEach((data: any) => {
          if (moment(data.dateTime).isAfter(latestDate)) {
            latestDate = data.dateTime;
          }
        });

        response.data.sleep.levels.shortData.forEach((data: any) => {
          if (moment(data.dateTime).isAfter(latestDate)) {
            latestDate = data.dateTime;
          }
        });
      }

      if (response.data.pagination) {
        nextLink = response.data.pagination.next;
      } else {
        nextLink = "";
      }
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  await prisma.updateUser({
    where: { id: userId },
    data: {
      sleepLogLastUpdatedDate: moment(latestDate).format("YYYY-MM-DDTHH:mm:ss")
    }
  });
};

export const createSleepLog = async (userId: string, sleepLog: any) => {
  const dbSleepLog = await prisma.createSleepLog({
    user: {
      connect: {
        id: userId
      }
    },
    dateOfSleep: sleepLog.dateOfSleep,
    duration: sleepLog.duration,
    efficiency: sleepLog.efficiency,
    isMainSleep: sleepLog.isMainSleep || false,
    logId: sleepLog.logId,
    minutesAfterWakeup: sleepLog.minutesAfterWakeup,
    minutesAsleep: sleepLog.minutesAsleep,
    minutesAwake: sleepLog.minutesAwake,
    minutesToFallAsleep: sleepLog.minutesToFallAsleep,
    startTime: sleepLog.startTime,
    timeInBed: sleepLog.timeInBed,
    type: sleepLog.type,
    summaryDeepCount:
      sleepLog.type == "stages" ? sleepLog.levels.summary.deep.count : 0,
    summaryDeepMinutes:
      sleepLog.type == "stages" ? sleepLog.levels.summary.deep.minutes : 0,
    summaryDeepThirtyDayAvgMinutes:
      sleepLog.type == "stages"
        ? sleepLog.levels.summary.deep.thirtyDayAvgMinutes
        : 0,
    summaryLightCount:
      sleepLog.type == "stages" ? sleepLog.levels.summary.light.count : 0,
    summaryLightMinutes:
      sleepLog.type == "stages" ? sleepLog.levels.summary.light.minutes : 0,
    summaryLightThirtyDayAvgMinutes:
      sleepLog.type == "stages"
        ? sleepLog.levels.summary.light.thirtyDayAvgMinutes
        : 0,
    summaryRemCount:
      sleepLog.type == "stages" ? sleepLog.levels.summary.rem.count : 0,
    summaryRemMinutes:
      sleepLog.type == "stages" ? sleepLog.levels.summary.rem.minutes : 0,
    summaryRemThirtyDayAvgMinutes:
      sleepLog.type == "stages"
        ? sleepLog.levels.summary.rem.thirtyDayAvgMinutes
        : 0,
    summaryWakeCount:
      sleepLog.type == "stages" ? sleepLog.levels.summary.wake.count : 0,
    summaryWakeMinutes:
      sleepLog.type == "stages" ? sleepLog.levels.summary.wake.minutes : 0,
    summaryWakeThirtyDayAvgMinutes:
      sleepLog.type == "stages"
        ? sleepLog.levels.summary.wake.thirtyDayAvgMinutes
        : 0,
    summaryAsleepCount:
      sleepLog.type == "classic" ? sleepLog.levels.summary.asleep.count : 0,
    summaryAsleepMinutes:
      sleepLog.type == "classic" ? sleepLog.levels.summary.asleep.minutes : 0,
    summaryAwakeCount:
      sleepLog.type == "classic" ? sleepLog.levels.summary.awake.count : 0,
    summaryAwakeMinutes:
      sleepLog.type == "classic" ? sleepLog.levels.summary.awake.minutes : 0,
    summaryRestlessCount:
      sleepLog.type == "classic" ? sleepLog.levels.summary.restless.count : 0,
    summaryRestlessMinutes:
      sleepLog.type == "classic" ? sleepLog.levels.summary.restless.minutes : 0,
    sleepData: {
      create: sleepLog.levels.data
        .map((data: any) => {
          return {
            dateTime: data.dateTime,
            level: data.level,
            second: data.seconds
          };
        })
        .concat(
          sleepLog.levels.shortData
            ? sleepLog.levels.shortData.map((data: any) => {
                return {
                  dateTime: data.dateTime,
                  level: data.level,
                  second: data.seconds
                };
              })
            : []
        )
    }
  });
};
