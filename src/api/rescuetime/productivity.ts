import * as moment from 'moment';
import axios from 'axios';
import { prisma } from '../../generated/prisma-client';

export const getAllUpdatedProductivityData = async (userId: string) => {
  const user = await prisma.user({ id: userId });
  const rescueTimeAccount = await prisma
    .user({ id: userId })
    .rescueTimeAccount();
  const rescueTimeAccessToken = rescueTimeAccount.accessToken;
  let firstRun = user.productivityDataLastUpdatedDate ? true : false;
  let latestTime = user.productivityDataLastUpdatedDate
    ? moment(user.productivityDataLastUpdatedDate)
    : moment("2018-12-18T00:00:00");
  let latestDate = moment(latestTime.format("YYYY-MM-DD"));
  const today = moment();
  // We want to do a binary search to find the first occurence of data (so we don't blow up RescueTime)
  if (firstRun) {
  }

  let count = 0;

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
        console.log(productivityData);
        const timestamp = moment(productivityData[0]).utc();
        if (
          timestamp.isSame(latestTime, "seconds") ||
          timestamp.isAfter(latestTime, "seconds")
        ) {
          let finalUpdatedTime = moment(
            response.data.rows[response.data.rows.length - 1][0]
          )
            .utc()
            .add(1, "seconds");
          let validRows = response.data.rows.slice(i);
          validRows.forEach((validProductivityData: any) => {
            console.log("adding");
            console.log(validProductivityData);
            count++;
            prisma
              .createProductivityData({
                user: {
                  connect: {
                    id: userId
                  }
                },
                startTime: validProductivityData[0],
                duration: validProductivityData[1],
                activity: validProductivityData[3],
                category: validProductivityData[4],
                productivity: validProductivityData[5]
              })
              .catch(error => {
                console.log(error);
              });
          });

          await prisma.updateUser({
            where: {
              id: userId
            },
            data: {
              productivityDataLastUpdatedDate: finalUpdatedTime.format(
                "YYYY-MM-DDTHH:mm:ss.SSSZ"
              )
            }
          });
          break;
        }
      }
    }

    latestDate.add(1, "day");
  }
  return count;
};
