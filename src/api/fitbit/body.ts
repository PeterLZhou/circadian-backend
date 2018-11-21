import axios from 'axios';

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
