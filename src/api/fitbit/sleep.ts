import * as querystring from 'querystring';
import axios from 'axios';
import { access } from 'fs';
import { Context } from '../../types';
import { prisma } from '../../generated/prisma-client';
import { refreshToken } from './refresh';

// Date is yyyy-MM-dd
export const getSleepLogs = async (
  ctx: Context,
  userId: string,
  date: string
) => {
  // const id = await user.id();
  // console.log(id);
  const fitbitAccount = await prisma.fitbitAccount({ userId: userId });
  const fitbitUserId = fitbitAccount.fitbitUserId;
  let accessToken = fitbitAccount.accessToken;
  if (new Date(fitbitAccount.expiration).getTime() < new Date().getTime()) {
    let newTokens = await refreshToken(fitbitAccount.refreshToken);
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
  console.log(response);
  console.log(response.data.sleep);
  return response;
};
