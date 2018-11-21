import { prisma } from '../generated/prisma-client';
import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
  googleFitAccount: parent => {
    throw new Error("Resolver not implemented");
  },
  fitbitAccount: parent => {
    return prisma.fitbitAccount({
      userId: parent.id
    });
  },
  sleepLogs: parent => {
    return prisma.sleepLogs({
      where: {
        userId: parent.id
      }
    });
  }
};
