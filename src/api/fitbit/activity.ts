import * as moment from 'moment';
import axios from 'axios';
import { prisma } from '../../generated/prisma-client';
import { refreshToken } from './refresh';

export const getAllActivities = async (userId: string) => {
  const fitbitAccount = await prisma.fitbitAccount({ userId: userId });
  const fitbitUserId = fitbitAccount.fitbitUserId;
  let accessToken = fitbitAccount.accessToken;
  if (new Date(fitbitAccount.expiration).getTime() < new Date().getTime()) {
    let newTokens = await refreshToken(
      fitbitAccount.id,
      fitbitAccount.refreshToken
    );
    accessToken = newTokens.accessToken;
  }
  const latestDate = moment().format("YYYY-MM-DD");
};

export const getDailyCalories = async (
  userId: string,
  fitbitUserId: string,
  accessToken: string,
  date: string
) => {
  const response = await axios.get(
    `https://api.fitbit.com/1/user/${fitbitUserId}/activities/calories/date/${date}/1min.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};

export const getDailySteps = async (
  userId: string,
  fitbitUserId: string,
  accessToken: string,
  date: string
) => {
  const response = await axios.get(
    `https://api.fitbit.com/1/user/${fitbitUserId}/activities/steps/date/${date}/1min.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};

export const getDailyDistance = async (
  userId: string,
  fitbitUserId: string,
  accessToken: string,
  date: string
) => {
  const response = await axios.get(
    `https://api.fitbit.com/1/user/${fitbitUserId}/activities/distance/date/${date}/1min.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};
export const getDailyFloors = async (
  userId: string,
  fitbitUserId: string,
  accessToken: string,
  date: string
) => {
  const response = await axios.get(
    `https://api.fitbit.com/1/user/${fitbitUserId}/activities/floors/date/${date}/1min.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};

export const getDailyElevation = async (
  userId: string,
  fitbitUserId: string,
  accessToken: string,
  date: string
) => {
  const response = await axios.get(
    `https://api.fitbit.com/1/user/${fitbitUserId}/activities/elevation/date/${date}/1min.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};
