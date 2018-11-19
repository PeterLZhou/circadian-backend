export const typeDefs = /* GraphQL */ `type AggregateFitbitAccount {
  count: Int!
}

type AggregateGoogleFitAccount {
  count: Int!
}

type AggregateSleepData {
  count: Int!
}

type AggregateSleepLog {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type FitbitAccount {
  id: ID!
  userId: ID!
  fitbitUserId: String!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

type FitbitAccountConnection {
  pageInfo: PageInfo!
  edges: [FitbitAccountEdge]!
  aggregate: AggregateFitbitAccount!
}

input FitbitAccountCreateInput {
  userId: ID!
  fitbitUserId: String!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

input FitbitAccountCreateOneInput {
  create: FitbitAccountCreateInput
  connect: FitbitAccountWhereUniqueInput
}

type FitbitAccountEdge {
  node: FitbitAccount!
  cursor: String!
}

enum FitbitAccountOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  fitbitUserId_ASC
  fitbitUserId_DESC
  refreshToken_ASC
  refreshToken_DESC
  accessToken_ASC
  accessToken_DESC
  expiration_ASC
  expiration_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FitbitAccountPreviousValues {
  id: ID!
  userId: ID!
  fitbitUserId: String!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

type FitbitAccountSubscriptionPayload {
  mutation: MutationType!
  node: FitbitAccount
  updatedFields: [String!]
  previousValues: FitbitAccountPreviousValues
}

input FitbitAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FitbitAccountWhereInput
  AND: [FitbitAccountSubscriptionWhereInput!]
  OR: [FitbitAccountSubscriptionWhereInput!]
  NOT: [FitbitAccountSubscriptionWhereInput!]
}

input FitbitAccountUpdateDataInput {
  userId: ID
  fitbitUserId: String
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input FitbitAccountUpdateInput {
  userId: ID
  fitbitUserId: String
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input FitbitAccountUpdateOneInput {
  create: FitbitAccountCreateInput
  update: FitbitAccountUpdateDataInput
  upsert: FitbitAccountUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FitbitAccountWhereUniqueInput
}

input FitbitAccountUpsertNestedInput {
  update: FitbitAccountUpdateDataInput!
  create: FitbitAccountCreateInput!
}

input FitbitAccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  fitbitUserId: String
  fitbitUserId_not: String
  fitbitUserId_in: [String!]
  fitbitUserId_not_in: [String!]
  fitbitUserId_lt: String
  fitbitUserId_lte: String
  fitbitUserId_gt: String
  fitbitUserId_gte: String
  fitbitUserId_contains: String
  fitbitUserId_not_contains: String
  fitbitUserId_starts_with: String
  fitbitUserId_not_starts_with: String
  fitbitUserId_ends_with: String
  fitbitUserId_not_ends_with: String
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  expiration: DateTime
  expiration_not: DateTime
  expiration_in: [DateTime!]
  expiration_not_in: [DateTime!]
  expiration_lt: DateTime
  expiration_lte: DateTime
  expiration_gt: DateTime
  expiration_gte: DateTime
  AND: [FitbitAccountWhereInput!]
  OR: [FitbitAccountWhereInput!]
  NOT: [FitbitAccountWhereInput!]
}

input FitbitAccountWhereUniqueInput {
  id: ID
  userId: ID
}

type GoogleFitAccount {
  id: ID!
  userId: ID!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

type GoogleFitAccountConnection {
  pageInfo: PageInfo!
  edges: [GoogleFitAccountEdge]!
  aggregate: AggregateGoogleFitAccount!
}

input GoogleFitAccountCreateInput {
  userId: ID!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

input GoogleFitAccountCreateOneInput {
  create: GoogleFitAccountCreateInput
  connect: GoogleFitAccountWhereUniqueInput
}

type GoogleFitAccountEdge {
  node: GoogleFitAccount!
  cursor: String!
}

enum GoogleFitAccountOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  refreshToken_ASC
  refreshToken_DESC
  accessToken_ASC
  accessToken_DESC
  expiration_ASC
  expiration_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GoogleFitAccountPreviousValues {
  id: ID!
  userId: ID!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

type GoogleFitAccountSubscriptionPayload {
  mutation: MutationType!
  node: GoogleFitAccount
  updatedFields: [String!]
  previousValues: GoogleFitAccountPreviousValues
}

input GoogleFitAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GoogleFitAccountWhereInput
  AND: [GoogleFitAccountSubscriptionWhereInput!]
  OR: [GoogleFitAccountSubscriptionWhereInput!]
  NOT: [GoogleFitAccountSubscriptionWhereInput!]
}

input GoogleFitAccountUpdateDataInput {
  userId: ID
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input GoogleFitAccountUpdateInput {
  userId: ID
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input GoogleFitAccountUpdateOneInput {
  create: GoogleFitAccountCreateInput
  update: GoogleFitAccountUpdateDataInput
  upsert: GoogleFitAccountUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: GoogleFitAccountWhereUniqueInput
}

input GoogleFitAccountUpsertNestedInput {
  update: GoogleFitAccountUpdateDataInput!
  create: GoogleFitAccountCreateInput!
}

input GoogleFitAccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  expiration: DateTime
  expiration_not: DateTime
  expiration_in: [DateTime!]
  expiration_not_in: [DateTime!]
  expiration_lt: DateTime
  expiration_lte: DateTime
  expiration_gt: DateTime
  expiration_gte: DateTime
  AND: [GoogleFitAccountWhereInput!]
  OR: [GoogleFitAccountWhereInput!]
  NOT: [GoogleFitAccountWhereInput!]
}

input GoogleFitAccountWhereUniqueInput {
  id: ID
  userId: ID
}

scalar Long

type Mutation {
  createFitbitAccount(data: FitbitAccountCreateInput!): FitbitAccount!
  updateFitbitAccount(data: FitbitAccountUpdateInput!, where: FitbitAccountWhereUniqueInput!): FitbitAccount
  updateManyFitbitAccounts(data: FitbitAccountUpdateInput!, where: FitbitAccountWhereInput): BatchPayload!
  upsertFitbitAccount(where: FitbitAccountWhereUniqueInput!, create: FitbitAccountCreateInput!, update: FitbitAccountUpdateInput!): FitbitAccount!
  deleteFitbitAccount(where: FitbitAccountWhereUniqueInput!): FitbitAccount
  deleteManyFitbitAccounts(where: FitbitAccountWhereInput): BatchPayload!
  createGoogleFitAccount(data: GoogleFitAccountCreateInput!): GoogleFitAccount!
  updateGoogleFitAccount(data: GoogleFitAccountUpdateInput!, where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  updateManyGoogleFitAccounts(data: GoogleFitAccountUpdateInput!, where: GoogleFitAccountWhereInput): BatchPayload!
  upsertGoogleFitAccount(where: GoogleFitAccountWhereUniqueInput!, create: GoogleFitAccountCreateInput!, update: GoogleFitAccountUpdateInput!): GoogleFitAccount!
  deleteGoogleFitAccount(where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  deleteManyGoogleFitAccounts(where: GoogleFitAccountWhereInput): BatchPayload!
  createSleepData(data: SleepDataCreateInput!): SleepData!
  updateSleepData(data: SleepDataUpdateInput!, where: SleepDataWhereUniqueInput!): SleepData
  updateManySleepDatas(data: SleepDataUpdateInput!, where: SleepDataWhereInput): BatchPayload!
  upsertSleepData(where: SleepDataWhereUniqueInput!, create: SleepDataCreateInput!, update: SleepDataUpdateInput!): SleepData!
  deleteSleepData(where: SleepDataWhereUniqueInput!): SleepData
  deleteManySleepDatas(where: SleepDataWhereInput): BatchPayload!
  createSleepLog(data: SleepLogCreateInput!): SleepLog!
  updateSleepLog(data: SleepLogUpdateInput!, where: SleepLogWhereUniqueInput!): SleepLog
  updateManySleepLogs(data: SleepLogUpdateInput!, where: SleepLogWhereInput): BatchPayload!
  upsertSleepLog(where: SleepLogWhereUniqueInput!, create: SleepLogCreateInput!, update: SleepLogUpdateInput!): SleepLog!
  deleteSleepLog(where: SleepLogWhereUniqueInput!): SleepLog
  deleteManySleepLogs(where: SleepLogWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  fitbitAccount(where: FitbitAccountWhereUniqueInput!): FitbitAccount
  fitbitAccounts(where: FitbitAccountWhereInput, orderBy: FitbitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FitbitAccount]!
  fitbitAccountsConnection(where: FitbitAccountWhereInput, orderBy: FitbitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FitbitAccountConnection!
  googleFitAccount(where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  googleFitAccounts(where: GoogleFitAccountWhereInput, orderBy: GoogleFitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GoogleFitAccount]!
  googleFitAccountsConnection(where: GoogleFitAccountWhereInput, orderBy: GoogleFitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GoogleFitAccountConnection!
  sleepData(where: SleepDataWhereUniqueInput!): SleepData
  sleepDatas(where: SleepDataWhereInput, orderBy: SleepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepData]!
  sleepDatasConnection(where: SleepDataWhereInput, orderBy: SleepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SleepDataConnection!
  sleepLog(where: SleepLogWhereUniqueInput!): SleepLog
  sleepLogs(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepLog]!
  sleepLogsConnection(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SleepLogConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type SleepData {
  id: ID!
  sleepLogId: ID!
  dateTime: DateTime!
  level: String!
  second: Int!
}

type SleepDataConnection {
  pageInfo: PageInfo!
  edges: [SleepDataEdge]!
  aggregate: AggregateSleepData!
}

input SleepDataCreateInput {
  sleepLogId: ID!
  dateTime: DateTime!
  level: String!
  second: Int!
}

input SleepDataCreateManyInput {
  create: [SleepDataCreateInput!]
  connect: [SleepDataWhereUniqueInput!]
}

type SleepDataEdge {
  node: SleepData!
  cursor: String!
}

enum SleepDataOrderByInput {
  id_ASC
  id_DESC
  sleepLogId_ASC
  sleepLogId_DESC
  dateTime_ASC
  dateTime_DESC
  level_ASC
  level_DESC
  second_ASC
  second_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SleepDataPreviousValues {
  id: ID!
  sleepLogId: ID!
  dateTime: DateTime!
  level: String!
  second: Int!
}

type SleepDataSubscriptionPayload {
  mutation: MutationType!
  node: SleepData
  updatedFields: [String!]
  previousValues: SleepDataPreviousValues
}

input SleepDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SleepDataWhereInput
  AND: [SleepDataSubscriptionWhereInput!]
  OR: [SleepDataSubscriptionWhereInput!]
  NOT: [SleepDataSubscriptionWhereInput!]
}

input SleepDataUpdateDataInput {
  sleepLogId: ID
  dateTime: DateTime
  level: String
  second: Int
}

input SleepDataUpdateInput {
  sleepLogId: ID
  dateTime: DateTime
  level: String
  second: Int
}

input SleepDataUpdateManyInput {
  create: [SleepDataCreateInput!]
  update: [SleepDataUpdateWithWhereUniqueNestedInput!]
  upsert: [SleepDataUpsertWithWhereUniqueNestedInput!]
  delete: [SleepDataWhereUniqueInput!]
  connect: [SleepDataWhereUniqueInput!]
  disconnect: [SleepDataWhereUniqueInput!]
}

input SleepDataUpdateWithWhereUniqueNestedInput {
  where: SleepDataWhereUniqueInput!
  data: SleepDataUpdateDataInput!
}

input SleepDataUpsertWithWhereUniqueNestedInput {
  where: SleepDataWhereUniqueInput!
  update: SleepDataUpdateDataInput!
  create: SleepDataCreateInput!
}

input SleepDataWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sleepLogId: ID
  sleepLogId_not: ID
  sleepLogId_in: [ID!]
  sleepLogId_not_in: [ID!]
  sleepLogId_lt: ID
  sleepLogId_lte: ID
  sleepLogId_gt: ID
  sleepLogId_gte: ID
  sleepLogId_contains: ID
  sleepLogId_not_contains: ID
  sleepLogId_starts_with: ID
  sleepLogId_not_starts_with: ID
  sleepLogId_ends_with: ID
  sleepLogId_not_ends_with: ID
  dateTime: DateTime
  dateTime_not: DateTime
  dateTime_in: [DateTime!]
  dateTime_not_in: [DateTime!]
  dateTime_lt: DateTime
  dateTime_lte: DateTime
  dateTime_gt: DateTime
  dateTime_gte: DateTime
  level: String
  level_not: String
  level_in: [String!]
  level_not_in: [String!]
  level_lt: String
  level_lte: String
  level_gt: String
  level_gte: String
  level_contains: String
  level_not_contains: String
  level_starts_with: String
  level_not_starts_with: String
  level_ends_with: String
  level_not_ends_with: String
  second: Int
  second_not: Int
  second_in: [Int!]
  second_not_in: [Int!]
  second_lt: Int
  second_lte: Int
  second_gt: Int
  second_gte: Int
  AND: [SleepDataWhereInput!]
  OR: [SleepDataWhereInput!]
  NOT: [SleepDataWhereInput!]
}

input SleepDataWhereUniqueInput {
  id: ID
}

type SleepLog {
  id: ID!
  userId: ID!
  dateOfSleep: String!
  duration: Int!
  efficiency: Int!
  isMainSleep: Boolean!
  logId: String!
  minutesAfterWakeup: Int!
  minutesAsleep: Int!
  minutesAwake: Int!
  minutesToFallAsleep: Int!
  startTime: DateTime!
  timeInBed: Int!
  type: String
  data(where: SleepDataWhereInput, orderBy: SleepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepData!]
  summaryDeepCount: Int
  summaryDeepMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryAsleepCount: Int
  summarySleepMinutes: Int
  summaryAwakeCount: Int
  summaryAwakeMinutes: Int
  summaryRestlessCount: Int
  summaryRestlessMinutes: Int
}

type SleepLogConnection {
  pageInfo: PageInfo!
  edges: [SleepLogEdge]!
  aggregate: AggregateSleepLog!
}

input SleepLogCreateInput {
  userId: ID!
  dateOfSleep: String!
  duration: Int!
  efficiency: Int!
  isMainSleep: Boolean!
  logId: String!
  minutesAfterWakeup: Int!
  minutesAsleep: Int!
  minutesAwake: Int!
  minutesToFallAsleep: Int!
  startTime: DateTime!
  timeInBed: Int!
  type: String
  data: SleepDataCreateManyInput
  summaryDeepCount: Int
  summaryDeepMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryAsleepCount: Int
  summarySleepMinutes: Int
  summaryAwakeCount: Int
  summaryAwakeMinutes: Int
  summaryRestlessCount: Int
  summaryRestlessMinutes: Int
}

input SleepLogCreateManyInput {
  create: [SleepLogCreateInput!]
  connect: [SleepLogWhereUniqueInput!]
}

type SleepLogEdge {
  node: SleepLog!
  cursor: String!
}

enum SleepLogOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  dateOfSleep_ASC
  dateOfSleep_DESC
  duration_ASC
  duration_DESC
  efficiency_ASC
  efficiency_DESC
  isMainSleep_ASC
  isMainSleep_DESC
  logId_ASC
  logId_DESC
  minutesAfterWakeup_ASC
  minutesAfterWakeup_DESC
  minutesAsleep_ASC
  minutesAsleep_DESC
  minutesAwake_ASC
  minutesAwake_DESC
  minutesToFallAsleep_ASC
  minutesToFallAsleep_DESC
  startTime_ASC
  startTime_DESC
  timeInBed_ASC
  timeInBed_DESC
  type_ASC
  type_DESC
  summaryDeepCount_ASC
  summaryDeepCount_DESC
  summaryDeepMinutes_ASC
  summaryDeepMinutes_DESC
  summaryLightThirtyDayAvgMinutes_ASC
  summaryLightThirtyDayAvgMinutes_DESC
  summaryLightCount_ASC
  summaryLightCount_DESC
  summaryLightMinutes_ASC
  summaryLightMinutes_DESC
  summaryRemThirtyDayAvgMinutes_ASC
  summaryRemThirtyDayAvgMinutes_DESC
  summaryRemCount_ASC
  summaryRemCount_DESC
  summaryRemMinutes_ASC
  summaryRemMinutes_DESC
  summaryWakeThirtyDayAvgMinutes_ASC
  summaryWakeThirtyDayAvgMinutes_DESC
  summaryWakeCount_ASC
  summaryWakeCount_DESC
  summaryWakeMinutes_ASC
  summaryWakeMinutes_DESC
  summaryAsleepCount_ASC
  summaryAsleepCount_DESC
  summarySleepMinutes_ASC
  summarySleepMinutes_DESC
  summaryAwakeCount_ASC
  summaryAwakeCount_DESC
  summaryAwakeMinutes_ASC
  summaryAwakeMinutes_DESC
  summaryRestlessCount_ASC
  summaryRestlessCount_DESC
  summaryRestlessMinutes_ASC
  summaryRestlessMinutes_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SleepLogPreviousValues {
  id: ID!
  userId: ID!
  dateOfSleep: String!
  duration: Int!
  efficiency: Int!
  isMainSleep: Boolean!
  logId: String!
  minutesAfterWakeup: Int!
  minutesAsleep: Int!
  minutesAwake: Int!
  minutesToFallAsleep: Int!
  startTime: DateTime!
  timeInBed: Int!
  type: String
  summaryDeepCount: Int
  summaryDeepMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryAsleepCount: Int
  summarySleepMinutes: Int
  summaryAwakeCount: Int
  summaryAwakeMinutes: Int
  summaryRestlessCount: Int
  summaryRestlessMinutes: Int
}

type SleepLogSubscriptionPayload {
  mutation: MutationType!
  node: SleepLog
  updatedFields: [String!]
  previousValues: SleepLogPreviousValues
}

input SleepLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SleepLogWhereInput
  AND: [SleepLogSubscriptionWhereInput!]
  OR: [SleepLogSubscriptionWhereInput!]
  NOT: [SleepLogSubscriptionWhereInput!]
}

input SleepLogUpdateDataInput {
  userId: ID
  dateOfSleep: String
  duration: Int
  efficiency: Int
  isMainSleep: Boolean
  logId: String
  minutesAfterWakeup: Int
  minutesAsleep: Int
  minutesAwake: Int
  minutesToFallAsleep: Int
  startTime: DateTime
  timeInBed: Int
  type: String
  data: SleepDataUpdateManyInput
  summaryDeepCount: Int
  summaryDeepMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryAsleepCount: Int
  summarySleepMinutes: Int
  summaryAwakeCount: Int
  summaryAwakeMinutes: Int
  summaryRestlessCount: Int
  summaryRestlessMinutes: Int
}

input SleepLogUpdateInput {
  userId: ID
  dateOfSleep: String
  duration: Int
  efficiency: Int
  isMainSleep: Boolean
  logId: String
  minutesAfterWakeup: Int
  minutesAsleep: Int
  minutesAwake: Int
  minutesToFallAsleep: Int
  startTime: DateTime
  timeInBed: Int
  type: String
  data: SleepDataUpdateManyInput
  summaryDeepCount: Int
  summaryDeepMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryAsleepCount: Int
  summarySleepMinutes: Int
  summaryAwakeCount: Int
  summaryAwakeMinutes: Int
  summaryRestlessCount: Int
  summaryRestlessMinutes: Int
}

input SleepLogUpdateManyInput {
  create: [SleepLogCreateInput!]
  update: [SleepLogUpdateWithWhereUniqueNestedInput!]
  upsert: [SleepLogUpsertWithWhereUniqueNestedInput!]
  delete: [SleepLogWhereUniqueInput!]
  connect: [SleepLogWhereUniqueInput!]
  disconnect: [SleepLogWhereUniqueInput!]
}

input SleepLogUpdateWithWhereUniqueNestedInput {
  where: SleepLogWhereUniqueInput!
  data: SleepLogUpdateDataInput!
}

input SleepLogUpsertWithWhereUniqueNestedInput {
  where: SleepLogWhereUniqueInput!
  update: SleepLogUpdateDataInput!
  create: SleepLogCreateInput!
}

input SleepLogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  dateOfSleep: String
  dateOfSleep_not: String
  dateOfSleep_in: [String!]
  dateOfSleep_not_in: [String!]
  dateOfSleep_lt: String
  dateOfSleep_lte: String
  dateOfSleep_gt: String
  dateOfSleep_gte: String
  dateOfSleep_contains: String
  dateOfSleep_not_contains: String
  dateOfSleep_starts_with: String
  dateOfSleep_not_starts_with: String
  dateOfSleep_ends_with: String
  dateOfSleep_not_ends_with: String
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  efficiency: Int
  efficiency_not: Int
  efficiency_in: [Int!]
  efficiency_not_in: [Int!]
  efficiency_lt: Int
  efficiency_lte: Int
  efficiency_gt: Int
  efficiency_gte: Int
  isMainSleep: Boolean
  isMainSleep_not: Boolean
  logId: String
  logId_not: String
  logId_in: [String!]
  logId_not_in: [String!]
  logId_lt: String
  logId_lte: String
  logId_gt: String
  logId_gte: String
  logId_contains: String
  logId_not_contains: String
  logId_starts_with: String
  logId_not_starts_with: String
  logId_ends_with: String
  logId_not_ends_with: String
  minutesAfterWakeup: Int
  minutesAfterWakeup_not: Int
  minutesAfterWakeup_in: [Int!]
  minutesAfterWakeup_not_in: [Int!]
  minutesAfterWakeup_lt: Int
  minutesAfterWakeup_lte: Int
  minutesAfterWakeup_gt: Int
  minutesAfterWakeup_gte: Int
  minutesAsleep: Int
  minutesAsleep_not: Int
  minutesAsleep_in: [Int!]
  minutesAsleep_not_in: [Int!]
  minutesAsleep_lt: Int
  minutesAsleep_lte: Int
  minutesAsleep_gt: Int
  minutesAsleep_gte: Int
  minutesAwake: Int
  minutesAwake_not: Int
  minutesAwake_in: [Int!]
  minutesAwake_not_in: [Int!]
  minutesAwake_lt: Int
  minutesAwake_lte: Int
  minutesAwake_gt: Int
  minutesAwake_gte: Int
  minutesToFallAsleep: Int
  minutesToFallAsleep_not: Int
  minutesToFallAsleep_in: [Int!]
  minutesToFallAsleep_not_in: [Int!]
  minutesToFallAsleep_lt: Int
  minutesToFallAsleep_lte: Int
  minutesToFallAsleep_gt: Int
  minutesToFallAsleep_gte: Int
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  timeInBed: Int
  timeInBed_not: Int
  timeInBed_in: [Int!]
  timeInBed_not_in: [Int!]
  timeInBed_lt: Int
  timeInBed_lte: Int
  timeInBed_gt: Int
  timeInBed_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  data_every: SleepDataWhereInput
  data_some: SleepDataWhereInput
  data_none: SleepDataWhereInput
  summaryDeepCount: Int
  summaryDeepCount_not: Int
  summaryDeepCount_in: [Int!]
  summaryDeepCount_not_in: [Int!]
  summaryDeepCount_lt: Int
  summaryDeepCount_lte: Int
  summaryDeepCount_gt: Int
  summaryDeepCount_gte: Int
  summaryDeepMinutes: Int
  summaryDeepMinutes_not: Int
  summaryDeepMinutes_in: [Int!]
  summaryDeepMinutes_not_in: [Int!]
  summaryDeepMinutes_lt: Int
  summaryDeepMinutes_lte: Int
  summaryDeepMinutes_gt: Int
  summaryDeepMinutes_gte: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightThirtyDayAvgMinutes_not: Int
  summaryLightThirtyDayAvgMinutes_in: [Int!]
  summaryLightThirtyDayAvgMinutes_not_in: [Int!]
  summaryLightThirtyDayAvgMinutes_lt: Int
  summaryLightThirtyDayAvgMinutes_lte: Int
  summaryLightThirtyDayAvgMinutes_gt: Int
  summaryLightThirtyDayAvgMinutes_gte: Int
  summaryLightCount: Int
  summaryLightCount_not: Int
  summaryLightCount_in: [Int!]
  summaryLightCount_not_in: [Int!]
  summaryLightCount_lt: Int
  summaryLightCount_lte: Int
  summaryLightCount_gt: Int
  summaryLightCount_gte: Int
  summaryLightMinutes: Int
  summaryLightMinutes_not: Int
  summaryLightMinutes_in: [Int!]
  summaryLightMinutes_not_in: [Int!]
  summaryLightMinutes_lt: Int
  summaryLightMinutes_lte: Int
  summaryLightMinutes_gt: Int
  summaryLightMinutes_gte: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemThirtyDayAvgMinutes_not: Int
  summaryRemThirtyDayAvgMinutes_in: [Int!]
  summaryRemThirtyDayAvgMinutes_not_in: [Int!]
  summaryRemThirtyDayAvgMinutes_lt: Int
  summaryRemThirtyDayAvgMinutes_lte: Int
  summaryRemThirtyDayAvgMinutes_gt: Int
  summaryRemThirtyDayAvgMinutes_gte: Int
  summaryRemCount: Int
  summaryRemCount_not: Int
  summaryRemCount_in: [Int!]
  summaryRemCount_not_in: [Int!]
  summaryRemCount_lt: Int
  summaryRemCount_lte: Int
  summaryRemCount_gt: Int
  summaryRemCount_gte: Int
  summaryRemMinutes: Int
  summaryRemMinutes_not: Int
  summaryRemMinutes_in: [Int!]
  summaryRemMinutes_not_in: [Int!]
  summaryRemMinutes_lt: Int
  summaryRemMinutes_lte: Int
  summaryRemMinutes_gt: Int
  summaryRemMinutes_gte: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeThirtyDayAvgMinutes_not: Int
  summaryWakeThirtyDayAvgMinutes_in: [Int!]
  summaryWakeThirtyDayAvgMinutes_not_in: [Int!]
  summaryWakeThirtyDayAvgMinutes_lt: Int
  summaryWakeThirtyDayAvgMinutes_lte: Int
  summaryWakeThirtyDayAvgMinutes_gt: Int
  summaryWakeThirtyDayAvgMinutes_gte: Int
  summaryWakeCount: Int
  summaryWakeCount_not: Int
  summaryWakeCount_in: [Int!]
  summaryWakeCount_not_in: [Int!]
  summaryWakeCount_lt: Int
  summaryWakeCount_lte: Int
  summaryWakeCount_gt: Int
  summaryWakeCount_gte: Int
  summaryWakeMinutes: Int
  summaryWakeMinutes_not: Int
  summaryWakeMinutes_in: [Int!]
  summaryWakeMinutes_not_in: [Int!]
  summaryWakeMinutes_lt: Int
  summaryWakeMinutes_lte: Int
  summaryWakeMinutes_gt: Int
  summaryWakeMinutes_gte: Int
  summaryAsleepCount: Int
  summaryAsleepCount_not: Int
  summaryAsleepCount_in: [Int!]
  summaryAsleepCount_not_in: [Int!]
  summaryAsleepCount_lt: Int
  summaryAsleepCount_lte: Int
  summaryAsleepCount_gt: Int
  summaryAsleepCount_gte: Int
  summarySleepMinutes: Int
  summarySleepMinutes_not: Int
  summarySleepMinutes_in: [Int!]
  summarySleepMinutes_not_in: [Int!]
  summarySleepMinutes_lt: Int
  summarySleepMinutes_lte: Int
  summarySleepMinutes_gt: Int
  summarySleepMinutes_gte: Int
  summaryAwakeCount: Int
  summaryAwakeCount_not: Int
  summaryAwakeCount_in: [Int!]
  summaryAwakeCount_not_in: [Int!]
  summaryAwakeCount_lt: Int
  summaryAwakeCount_lte: Int
  summaryAwakeCount_gt: Int
  summaryAwakeCount_gte: Int
  summaryAwakeMinutes: Int
  summaryAwakeMinutes_not: Int
  summaryAwakeMinutes_in: [Int!]
  summaryAwakeMinutes_not_in: [Int!]
  summaryAwakeMinutes_lt: Int
  summaryAwakeMinutes_lte: Int
  summaryAwakeMinutes_gt: Int
  summaryAwakeMinutes_gte: Int
  summaryRestlessCount: Int
  summaryRestlessCount_not: Int
  summaryRestlessCount_in: [Int!]
  summaryRestlessCount_not_in: [Int!]
  summaryRestlessCount_lt: Int
  summaryRestlessCount_lte: Int
  summaryRestlessCount_gt: Int
  summaryRestlessCount_gte: Int
  summaryRestlessMinutes: Int
  summaryRestlessMinutes_not: Int
  summaryRestlessMinutes_in: [Int!]
  summaryRestlessMinutes_not_in: [Int!]
  summaryRestlessMinutes_lt: Int
  summaryRestlessMinutes_lte: Int
  summaryRestlessMinutes_gt: Int
  summaryRestlessMinutes_gte: Int
  AND: [SleepLogWhereInput!]
  OR: [SleepLogWhereInput!]
  NOT: [SleepLogWhereInput!]
}

input SleepLogWhereUniqueInput {
  id: ID
}

type Subscription {
  fitbitAccount(where: FitbitAccountSubscriptionWhereInput): FitbitAccountSubscriptionPayload
  googleFitAccount(where: GoogleFitAccountSubscriptionWhereInput): GoogleFitAccountSubscriptionPayload
  sleepData(where: SleepDataSubscriptionWhereInput): SleepDataSubscriptionPayload
  sleepLog(where: SleepLogSubscriptionWhereInput): SleepLogSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccount
  fitbitAccount: FitbitAccount
  sleepLogs(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepLog!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneInput
  fitbitAccount: FitbitAccountCreateOneInput
  sleepLogs: SleepLogCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneInput
  fitbitAccount: FitbitAccountUpdateOneInput
  sleepLogs: SleepLogUpdateManyInput
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  googleFitAccount: GoogleFitAccountWhereInput
  fitbitAccount: FitbitAccountWhereInput
  sleepLogs_every: SleepLogWhereInput
  sleepLogs_some: SleepLogWhereInput
  sleepLogs_none: SleepLogWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`