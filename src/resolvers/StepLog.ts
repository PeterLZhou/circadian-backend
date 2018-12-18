import { prisma } from '../generated/prisma-client';
import { StepLogResolvers } from '../generated/graphqlgen';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const StepLog: StepLogResolvers.Type = {
  ...StepLogResolvers.defaultResolvers,
  user: parent => {
    return prisma.stepLog({ id: parent.id }).user();
  },
  stepData: parent => {
    return prisma.stepLog({ id: parent.id }).stepData();
  }
};
