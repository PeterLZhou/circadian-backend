import { HeartDataResolvers } from '../generated/graphqlgen';
import { prisma } from '../generated/prisma-client';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const HeartData: HeartDataResolvers.Type = {
  ...HeartDataResolvers.defaultResolvers,
  heartLog: parent => {
    return prisma.heartData({ id: parent.id }).heartLog();
  }
};
