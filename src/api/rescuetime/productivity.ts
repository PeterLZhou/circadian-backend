import * as moment from 'moment';
import axios from 'axios';
import { prisma } from '../../generated/prisma-client';

export const getAllUpdatedProductivityLogs = async (userId: string) => {
  const rescueTimeAccount = await prisma
    .user({ id: userId })
    .rescueTimeAccount();
  const productivityLogLastUpdatedDate = await prisma
    .user({ id: userId })
    .productivityLogLastUpdatedDate();
  const rescueTimeAccessToken = rescueTimeAccount.accessToken;
  const earliestDate =
    moment(productivityLogLastUpdatedDate).format("YYYY-MM-DD") || "2007-03-26";

  axios.post("https://www.rescuetime.com/anapi/data", {
    access_token: rescueTimeAccessToken,
    rs: "minute",
    rb: "2018-01-01"
  });
};
