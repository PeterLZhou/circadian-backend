import * as moment from 'moment';
import axios from 'axios';
import { prisma } from '../../generated/prisma-client';

export const getAllUpdatedProductivityData = async (userId: string) => {
  const user = await prisma.user({ id: userId });
  const rescueTimeAccount = await prisma
    .user({ id: userId })
    .rescueTimeAccount();
  const rescueTimeAccessToken = rescueTimeAccount.accessToken;
  let firstRun =
    user.productivityDataLastUpdatedDate == "2009-01-01T00:00:00.000Z" ||
    !user.productivityDataLastUpdatedDate;
  let latestTime =
    user.productivityDataLastUpdatedDate &&
    user.productivityDataLastUpdatedDate != "2009-01-01T00:00:00.000Z"
      ? moment(user.productivityDataLastUpdatedDate)
      : moment("2009-01-01T00:00:00").utc();
  let latestDate = moment(latestTime.format("YYYY-MM-DD"));
  const today = moment();

  // We want to do a binary search to find the first occurence of data (so we don't blow up RescueTime)
  if (firstRun) {
    let monthFound = false;
    while (!monthFound) {
      let nextMonth = latestDate.clone().add(1, "month");
      console.log(
        "searching between " +
          latestDate.format("YYYY-MM-DD") +
          " and " +
          nextMonth.format("YYYY-MM-DD")
      );
      const searchResponse = await axios
        .post("https://www.rescuetime.com/api/oauth/data", {
          access_token: rescueTimeAccessToken,
          format: "json",
          perspective: "interval",
          rs: "minute",
          rb: latestDate.format("YYYY-MM-DD"),
          re: nextMonth.format("YYYY-MM-DD")
        })
        .catch(error => {
          console.log(error);
        });
      if (
        searchResponse &&
        searchResponse.data.rows &&
        searchResponse.data.rows.length > 0
      ) {
        monthFound = true;
      } else {
        latestDate.add(1, "month");
        latestTime.add(1, "month");
      }
    }
  }

  let count = 0;
  let productivityDataEntries: any[] = [];
  let finalUpdatedTime: moment.Moment = latestTime;

  while (latestDate.isSame(today, "day") || latestDate.isBefore(today)) {
    const response = await axios
      .post("https://www.rescuetime.com/api/oauth/data", {
        access_token: rescueTimeAccessToken,
        format: "json",
        perspective: "interval",
        rs: "minute",
        rb: latestDate.format("YYYY-MM-DD"),
        re: latestDate.format("YYYY-MM-DD")
      })
      .catch(error => {
        console.log(error);
      });

    if (
      response &&
      response.data &&
      response.data.rows &&
      response.data.rows.length > 0
    ) {
      // Because ordered timewise, find first earliest one and then add everything after.
      for (let i = 0; i < response.data.rows.length; i++) {
        const productivityData = response.data.rows[i];
        const timestamp = moment(productivityData[0]).utc();
        if (
          timestamp.isSame(latestTime, "seconds") ||
          timestamp.isAfter(latestTime, "seconds")
        ) {
          finalUpdatedTime = moment(
            response.data.rows[response.data.rows.length - 1][0]
          )
            .utc()
            .add(1, "seconds");
          let validRows = response.data.rows.slice(i);
          let newDataEntries = validRows.map((validProductivityData: any) => {
            return {
              startTime: validProductivityData[0],
              duration: validProductivityData[1],
              activity: validProductivityData[3],
              category: validProductivityData[4],
              productivity: validProductivityData[5]
            };
          });
          productivityDataEntries = productivityDataEntries.concat(
            newDataEntries
          );

          break;
        }
      }
    }

    latestDate.add(1, "day");
  }

  // This is enormous if you have a lot of rescuetime info, 100k + rows
  await prisma
    .updateUser({
      where: {
        id: userId
      },
      data: {
        productivityDataLastUpdatedDate: finalUpdatedTime.format(
          "YYYY-MM-DDTHH:mm:ss.SSSZ"
        ),
        productivityData: {
          create: productivityDataEntries
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
  count += productivityDataEntries.length;

  return count;
};
