import { AuthPayload } from './AuthPayload';
import { GoogleFitAccessToken } from './GoogleFitAccessToken';
import { GoogleFitAccount } from './GoogleFitAccount';
import { Mutation } from './Mutation';
import { Query } from './Query';
import { Resolvers } from '../generated/graphqlgen';
import { User } from './User';

export const resolvers: Resolvers = {
  Query,
  Mutation,
  AuthPayload,
  User,
  GoogleFitAccount,
  GoogleFitAccessToken
};
