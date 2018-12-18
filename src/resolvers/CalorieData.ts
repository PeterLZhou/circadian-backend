import { CalorieDataResolvers } from '../generated/graphqlgen';
import { prisma } from '../generated/prisma-client';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const CalorieData: CalorieDataResolvers.Type = {
  ...CalorieDataResolvers.defaultResolvers,
  calorieLog: parent => {
    return prisma.calorieData({ id: parent.id }).calorieLog();
  }
};
