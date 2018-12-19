// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from "../graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  login: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  deleteUser: (parent, args) => null,
  createRescueTimeAccount: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  deleteFitbitAccount: (parent, args) => null,
  refreshSleepLogs: (parent, args) => "",
  deleteAllSleepLogs: (parent, args) => "",
  refreshProductivityData: (parent, args) => "",
  deleteAllProductivityData: (parent, args) => ""
};
