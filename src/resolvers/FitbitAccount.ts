import { FitbitAccountResolvers } from '../generated/graphqlgen';
import { prisma } from '../generated/prisma-client';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const FitbitAccount: FitbitAccountResolvers.Type = {
  ...FitbitAccountResolvers.defaultResolvers,
  user: parent => {
    return prisma.fitbitAccount({ id: parent.id }).user();
  }
};
