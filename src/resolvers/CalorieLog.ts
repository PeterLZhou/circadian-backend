import { CalorieLogResolvers } from '../generated/graphqlgen';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const CalorieLog: CalorieLogResolvers.Type = {
  ...CalorieLogResolvers.defaultResolvers,

  intradayData: parent => {
    throw new Error("Resolver not implemented");
  }
};
