import { HeartLogResolvers } from '../generated/graphqlgen';
import { prisma } from '../generated/prisma-client';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const HeartLog: HeartLogResolvers.Type = {
  ...HeartLogResolvers.defaultResolvers,
  user: parent => {
    return prisma.calorieLog({ id: parent.id }).user();
  },
  heartData: parent => {
    return prisma.heartLog({ id: parent.id }).heartData();
  }
};
