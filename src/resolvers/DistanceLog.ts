import { DistanceLogResolvers } from '../generated/graphqlgen';
import { prisma } from '../generated/prisma-client';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const DistanceLog: DistanceLogResolvers.Type = {
  ...DistanceLogResolvers.defaultResolvers,
  user: parent => {
    return prisma.calorieLog({ id: parent.id }).user();
  },
  distanceData: parent => {
    return prisma.distanceLog({ id: parent.id }).distanceData();
  }
};
