// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { FitbitAccountResolvers } from "../graphqlgen";

export const FitbitAccount: FitbitAccountResolvers.Type = {
  ...FitbitAccountResolvers.defaultResolvers,

  user: parent => {
    throw new Error("Resolver not implemented");
  }
};
