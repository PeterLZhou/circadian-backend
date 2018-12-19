import { getAllUpdatedSleepLogs } from '../api/fitbit/sleep';
import { prisma } from '../generated/prisma-client';
import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
  googleFitAccount: parent => {
    throw new Error("Resolver not implemented");
  },
  fitbitAccount: parent => {
    return prisma.user({ id: parent.id }).fitbitAccount();
  },
  rescueTimeAccount: parent => {
    return prisma.user({ id: parent.id }).rescueTimeAccount();
  },
  sleepLogs: async parent => {
    // await getAllUpdatedSleepLogs(parent.id);
    return prisma.user({ id: parent.id }).sleepLogs();
  },
  productivityData: async parent => {
    return prisma.user({ id: parent.id }).productivityData();
  }
};
