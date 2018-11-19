import { AuthPayload } from './AuthPayload';
import { FitbitAccount } from './FitbitAccount';
import { GoogleFitAccount } from './GoogleFitAccount';
import { Mutation } from './Mutation';
import { Query } from './Query';
import { Resolvers } from '../generated/graphqlgen';
import { SleepData } from './SleepData';
import { SleepLog } from './SleepLog';
import { User } from './User';

export const resolvers: Resolvers = {
  Query,
  Mutation,
  AuthPayload,
  User,
  GoogleFitAccount,
  FitbitAccount,
  SleepData,
  SleepLog
};
