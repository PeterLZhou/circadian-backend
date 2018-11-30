import { StepLogResolvers } from '../generated/graphqlgen';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const StepLog: StepLogResolvers.Type = {
  ...StepLogResolvers.defaultResolvers,

  intradayData: parent => {
    throw new Error("Resolver not implemented");
  }
};
