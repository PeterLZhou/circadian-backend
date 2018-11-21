import axios from 'axios';

export const getAllHeartRate = async (userId: string) => {};

export const getDailyHeartRate = async (
  userId: string,
  fitbitUserId: string,
  accessToken: string,
  date: string
) => {
  const response = await axios.get(
    `https://api.fitbit.com/1/user/${fitbitUserId}/activities/heart/date/${date}/1d/1min.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};
