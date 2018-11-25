// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { Resolvers } from "../graphqlgen";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { User } from "./User";
import { GoogleFitAccount } from "./GoogleFitAccount";
import { FitbitAccount } from "./FitbitAccount";
import { SleepLog } from "./SleepLog";
import { SleepData } from "./SleepData";
import { HeartLog } from "./HeartLog";
import { HeartData } from "./HeartData";
import { StepLog } from "./StepLog";
import { StepData } from "./StepData";
import { CalorieLog } from "./CalorieLog";
import { CalorieData } from "./CalorieData";
import { DistanceLog } from "./DistanceLog";
import { DistanceData } from "./DistanceData";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  AuthPayload,
  User,
  GoogleFitAccount,
  FitbitAccount,
  SleepLog,
  SleepData,
  HeartLog,
  HeartData,
  StepLog,
  StepData,
  CalorieLog,
  CalorieData,
  DistanceLog,
  DistanceData
};
