import { prisma } from '../generated/prisma-client';
import { SleepLogResolvers } from '../generated/graphqlgen';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const SleepLog: SleepLogResolvers.Type = {
  ...SleepLogResolvers.defaultResolvers,
  user: parent => {
    return prisma.sleepLog({ id: parent.id }).user();
  },
  sleepData: parent => {
    return prisma.sleepLog({ id: parent.id }).sleepData();
  }
};
