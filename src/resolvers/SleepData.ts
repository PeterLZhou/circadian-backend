import { prisma } from '../generated/prisma-client';
import { SleepDataResolvers } from '../generated/graphqlgen';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const SleepData: SleepDataResolvers.Type = {
  ...SleepDataResolvers.defaultResolvers,
  sleepLog: parent => {
    return prisma.sleepData({ id: parent.id }).sleepLog();
  }
};
