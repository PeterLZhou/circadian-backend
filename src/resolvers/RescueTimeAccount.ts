import { prisma } from '../generated/prisma-client';
import { RescueTimeAccountResolvers } from '../generated/graphqlgen';

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const RescueTimeAccount: RescueTimeAccountResolvers.Type = {
  ...RescueTimeAccountResolvers.defaultResolvers,
  user: parent => {
    return prisma.rescueTimeAccount({ id: parent.id }).user();
  }
};
