import { CalorieLogResolvers } from '../generated/graphqlgen';
import { prisma } from '../generated/prisma-client';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const CalorieLog: CalorieLogResolvers.Type = {
  ...CalorieLogResolvers.defaultResolvers,
  user: parent => {
    return prisma.calorieLog({ id: parent.id }).user();
  },
  calorieData: parent => {
    return prisma.calorieLog({ id: parent.id }).calorieData();
  }
};
