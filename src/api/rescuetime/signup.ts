import axios from 'axios';
import { getFrontendUrl } from '../../utils';

export const getAccessToken = async (
  oneTimeCode: string
): Promise<{
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
} | null> => {
  let response: any;
  try {
    response = await axios.post(`https://www.rescuetime.com/oauth/token`, {
      client_id: process.env.RESCUETIME_CLIENT_ID,
      client_secret: process.env.RESCUETIME_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: oneTimeCode,
      redirect_uri: getFrontendUrl() + "/home"
    });
  } catch (error) {
    console.log(error);
    return null;
  }

  return response.data;
};
