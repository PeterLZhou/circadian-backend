import * as querystring from 'querystring';
import axios from 'axios';
import { base64Hash, getFrontendUrl } from '../../utils';
import { FitbitAccount } from '../../resolvers/FitbitAccount';
import { prisma } from '../../generated/prisma-client';

export const refreshToken = async (
  fitbitAccountId: string,
  refreshToken: string
): Promise<{
  accessToken: string;
  refreshToken: string;
  expiration: string;
}> => {
  console.log("expired getting new");
  return await new Promise<{
    accessToken: string;
    refreshToken: string;
    expiration: string;
  }>((resolve, reject) => {
    axios({
      method: "post",
      url:
        "https://api.fitbit.com/oauth2/token?" +
        querystring.stringify({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          redirect_uri: getFrontendUrl() + "/auth/fitbit"
        }),
      data: {},
      headers: {
        Authorization: `Basic ${base64Hash(
          `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`
        )}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => {
        let expirationDate = new Date();
        expirationDate.setSeconds(
          expirationDate.getSeconds() + response.data.expires_in
        );
        console.log("got new token");
        console.log(response.data.access_token);
        console.log(response.data.refresh_token);

        prisma.updateFitbitAccount({
          data: {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            expiration: expirationDate.toISOString()
          },
          where: {
            id: fitbitAccountId
          }
        });
        resolve({
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          expiration: expirationDate.toISOString()
        });
      })
      .catch(error => {
        console.log(error.response.data.errors);
        reject("Error fetching refresh token");
      });
  });
};
