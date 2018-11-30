import { AuthPayload } from './AuthPayload';
import { CalorieData } from './CalorieData';
import { CalorieLog } from './CalorieLog';
import { DistanceData } from './DistanceData';
import { DistanceLog } from './DistanceLog';
import { FitbitAccount } from './FitbitAccount';
import { GoogleFitAccount } from './GoogleFitAccount';
import { HeartData } from './HeartData';
import { HeartLog } from './HeartLog';
import { Mutation } from './Mutation';
import { Resolvers } from '../generated/graphqlgen';
import { SleepData } from './SleepData';
import { SleepLog } from './SleepLog';
import { StepData } from './StepData';
import { StepLog } from './StepLog';
import { User } from './User';
// import { Query } from './Query';

export const resolvers: Resolvers = {
  // Query,
  Mutation,
  AuthPayload,
  User,
  GoogleFitAccount,
  FitbitAccount,
  SleepData,
  SleepLog,
  HeartData,
  HeartLog,
  DistanceData,
  DistanceLog,
  StepData,
  StepLog,
  CalorieData,
  CalorieLog
};
