// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from "../graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: parent => null,
  users: parent => {
    throw new Error("Resolver not implemented");
  },
  fitbitAccounts: parent => {
    throw new Error("Resolver not implemented");
  },
  sleepDatas: parent => {
    throw new Error("Resolver not implemented");
  },
  sleepLogs: parent => {
    throw new Error("Resolver not implemented");
  }
};
