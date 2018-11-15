import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
  googleFitAccount: parent => {
    throw new Error("Resolver not implemented");
  }
};
