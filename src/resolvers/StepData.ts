import { prisma } from '../generated/prisma-client';
import { StepDataResolvers } from '../generated/graphqlgen';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const StepData: StepDataResolvers.Type = {
  ...StepDataResolvers.defaultResolvers,
  stepLog: parent => {
    return prisma.stepData({ id: parent.id }).stepLog();
  }
};
