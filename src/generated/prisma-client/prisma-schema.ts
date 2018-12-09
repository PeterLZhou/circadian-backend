export const typeDefs = /* GraphQL */ `type AggregateCalorieData {
  count: Int!
}

type AggregateCalorieLog {
  count: Int!
}

type AggregateDistanceData {
  count: Int!
}

type AggregateDistanceLog {
  count: Int!
}

type AggregateFitbitAccount {
  count: Int!
}

type AggregateGoogleFitAccount {
  count: Int!
}

type AggregateHeartData {
  count: Int!
}

type AggregateHeartLog {
  count: Int!
}

type AggregateRescueTimeAccount {
  count: Int!
}

type AggregateSleepData {
  count: Int!
}

type AggregateSleepLog {
  count: Int!
}

type AggregateStepData {
  count: Int!
}

type AggregateStepLog {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CalorieData {
  id: ID!
  calorieLogId: ID!
  dateTime: DateTime!
  calories: Float!
}

type CalorieDataConnection {
  pageInfo: PageInfo!
  edges: [CalorieDataEdge]!
  aggregate: AggregateCalorieData!
}

input CalorieDataCreateInput {
  calorieLogId: ID!
  dateTime: DateTime!
  calories: Float!
}

input CalorieDataCreateManyInput {
  create: [CalorieDataCreateInput!]
  connect: [CalorieDataWhereUniqueInput!]
}

type CalorieDataEdge {
  node: CalorieData!
  cursor: String!
}

enum CalorieDataOrderByInput {
  id_ASC
  id_DESC
  calorieLogId_ASC
  calorieLogId_DESC
  dateTime_ASC
  dateTime_DESC
  calories_ASC
  calories_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CalorieDataPreviousValues {
  id: ID!
  calorieLogId: ID!
  dateTime: DateTime!
  calories: Float!
}

type CalorieDataSubscriptionPayload {
  mutation: MutationType!
  node: CalorieData
  updatedFields: [String!]
  previousValues: CalorieDataPreviousValues
}

input CalorieDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CalorieDataWhereInput
  AND: [CalorieDataSubscriptionWhereInput!]
  OR: [CalorieDataSubscriptionWhereInput!]
  NOT: [CalorieDataSubscriptionWhereInput!]
}

input CalorieDataUpdateDataInput {
  calorieLogId: ID
  dateTime: DateTime
  calories: Float
}

input CalorieDataUpdateInput {
  calorieLogId: ID
  dateTime: DateTime
  calories: Float
}

input CalorieDataUpdateManyInput {
  create: [CalorieDataCreateInput!]
  update: [CalorieDataUpdateWithWhereUniqueNestedInput!]
  upsert: [CalorieDataUpsertWithWhereUniqueNestedInput!]
  delete: [CalorieDataWhereUniqueInput!]
  connect: [CalorieDataWhereUniqueInput!]
  disconnect: [CalorieDataWhereUniqueInput!]
}

input CalorieDataUpdateWithWhereUniqueNestedInput {
  where: CalorieDataWhereUniqueInput!
  data: CalorieDataUpdateDataInput!
}

input CalorieDataUpsertWithWhereUniqueNestedInput {
  where: CalorieDataWhereUniqueInput!
  update: CalorieDataUpdateDataInput!
  create: CalorieDataCreateInput!
}

input CalorieDataWhereInput {
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
  calorieLogId: ID
  calorieLogId_not: ID
  calorieLogId_in: [ID!]
  calorieLogId_not_in: [ID!]
  calorieLogId_lt: ID
  calorieLogId_lte: ID
  calorieLogId_gt: ID
  calorieLogId_gte: ID
  calorieLogId_contains: ID
  calorieLogId_not_contains: ID
  calorieLogId_starts_with: ID
  calorieLogId_not_starts_with: ID
  calorieLogId_ends_with: ID
  calorieLogId_not_ends_with: ID
  dateTime: DateTime
  dateTime_not: DateTime
  dateTime_in: [DateTime!]
  dateTime_not_in: [DateTime!]
  dateTime_lt: DateTime
  dateTime_lte: DateTime
  dateTime_gt: DateTime
  dateTime_gte: DateTime
  calories: Float
  calories_not: Float
  calories_in: [Float!]
  calories_not_in: [Float!]
  calories_lt: Float
  calories_lte: Float
  calories_gt: Float
  calories_gte: Float
  AND: [CalorieDataWhereInput!]
  OR: [CalorieDataWhereInput!]
  NOT: [CalorieDataWhereInput!]
}

input CalorieDataWhereUniqueInput {
  id: ID
}

type CalorieLog {
  id: ID!
  date: DateTime!
  totalCalories: Float!
  intradayData(where: CalorieDataWhereInput, orderBy: CalorieDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CalorieData!]
}

type CalorieLogConnection {
  pageInfo: PageInfo!
  edges: [CalorieLogEdge]!
  aggregate: AggregateCalorieLog!
}

input CalorieLogCreateInput {
  date: DateTime!
  totalCalories: Float!
  intradayData: CalorieDataCreateManyInput
}

type CalorieLogEdge {
  node: CalorieLog!
  cursor: String!
}

enum CalorieLogOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  totalCalories_ASC
  totalCalories_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CalorieLogPreviousValues {
  id: ID!
  date: DateTime!
  totalCalories: Float!
}

type CalorieLogSubscriptionPayload {
  mutation: MutationType!
  node: CalorieLog
  updatedFields: [String!]
  previousValues: CalorieLogPreviousValues
}

input CalorieLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CalorieLogWhereInput
  AND: [CalorieLogSubscriptionWhereInput!]
  OR: [CalorieLogSubscriptionWhereInput!]
  NOT: [CalorieLogSubscriptionWhereInput!]
}

input CalorieLogUpdateInput {
  date: DateTime
  totalCalories: Float
  intradayData: CalorieDataUpdateManyInput
}

input CalorieLogWhereInput {
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
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  totalCalories: Float
  totalCalories_not: Float
  totalCalories_in: [Float!]
  totalCalories_not_in: [Float!]
  totalCalories_lt: Float
  totalCalories_lte: Float
  totalCalories_gt: Float
  totalCalories_gte: Float
  intradayData_every: CalorieDataWhereInput
  intradayData_some: CalorieDataWhereInput
  intradayData_none: CalorieDataWhereInput
  AND: [CalorieLogWhereInput!]
  OR: [CalorieLogWhereInput!]
  NOT: [CalorieLogWhereInput!]
}

input CalorieLogWhereUniqueInput {
  id: ID
}

scalar DateTime

type DistanceData {
  id: ID!
  distanceLogId: ID!
  dateTime: DateTime!
  distance: Float!
}

type DistanceDataConnection {
  pageInfo: PageInfo!
  edges: [DistanceDataEdge]!
  aggregate: AggregateDistanceData!
}

input DistanceDataCreateInput {
  distanceLogId: ID!
  dateTime: DateTime!
  distance: Float!
}

input DistanceDataCreateManyInput {
  create: [DistanceDataCreateInput!]
  connect: [DistanceDataWhereUniqueInput!]
}

type DistanceDataEdge {
  node: DistanceData!
  cursor: String!
}

enum DistanceDataOrderByInput {
  id_ASC
  id_DESC
  distanceLogId_ASC
  distanceLogId_DESC
  dateTime_ASC
  dateTime_DESC
  distance_ASC
  distance_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DistanceDataPreviousValues {
  id: ID!
  distanceLogId: ID!
  dateTime: DateTime!
  distance: Float!
}

type DistanceDataSubscriptionPayload {
  mutation: MutationType!
  node: DistanceData
  updatedFields: [String!]
  previousValues: DistanceDataPreviousValues
}

input DistanceDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DistanceDataWhereInput
  AND: [DistanceDataSubscriptionWhereInput!]
  OR: [DistanceDataSubscriptionWhereInput!]
  NOT: [DistanceDataSubscriptionWhereInput!]
}

input DistanceDataUpdateDataInput {
  distanceLogId: ID
  dateTime: DateTime
  distance: Float
}

input DistanceDataUpdateInput {
  distanceLogId: ID
  dateTime: DateTime
  distance: Float
}

input DistanceDataUpdateManyInput {
  create: [DistanceDataCreateInput!]
  update: [DistanceDataUpdateWithWhereUniqueNestedInput!]
  upsert: [DistanceDataUpsertWithWhereUniqueNestedInput!]
  delete: [DistanceDataWhereUniqueInput!]
  connect: [DistanceDataWhereUniqueInput!]
  disconnect: [DistanceDataWhereUniqueInput!]
}

input DistanceDataUpdateWithWhereUniqueNestedInput {
  where: DistanceDataWhereUniqueInput!
  data: DistanceDataUpdateDataInput!
}

input DistanceDataUpsertWithWhereUniqueNestedInput {
  where: DistanceDataWhereUniqueInput!
  update: DistanceDataUpdateDataInput!
  create: DistanceDataCreateInput!
}

input DistanceDataWhereInput {
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
  distanceLogId: ID
  distanceLogId_not: ID
  distanceLogId_in: [ID!]
  distanceLogId_not_in: [ID!]
  distanceLogId_lt: ID
  distanceLogId_lte: ID
  distanceLogId_gt: ID
  distanceLogId_gte: ID
  distanceLogId_contains: ID
  distanceLogId_not_contains: ID
  distanceLogId_starts_with: ID
  distanceLogId_not_starts_with: ID
  distanceLogId_ends_with: ID
  distanceLogId_not_ends_with: ID
  dateTime: DateTime
  dateTime_not: DateTime
  dateTime_in: [DateTime!]
  dateTime_not_in: [DateTime!]
  dateTime_lt: DateTime
  dateTime_lte: DateTime
  dateTime_gt: DateTime
  dateTime_gte: DateTime
  distance: Float
  distance_not: Float
  distance_in: [Float!]
  distance_not_in: [Float!]
  distance_lt: Float
  distance_lte: Float
  distance_gt: Float
  distance_gte: Float
  AND: [DistanceDataWhereInput!]
  OR: [DistanceDataWhereInput!]
  NOT: [DistanceDataWhereInput!]
}

input DistanceDataWhereUniqueInput {
  id: ID
}

type DistanceLog {
  id: ID!
  date: DateTime!
  totalDistance: Float!
  intradayData(where: DistanceDataWhereInput, orderBy: DistanceDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DistanceData!]
}

type DistanceLogConnection {
  pageInfo: PageInfo!
  edges: [DistanceLogEdge]!
  aggregate: AggregateDistanceLog!
}

input DistanceLogCreateInput {
  date: DateTime!
  totalDistance: Float!
  intradayData: DistanceDataCreateManyInput
}

type DistanceLogEdge {
  node: DistanceLog!
  cursor: String!
}

enum DistanceLogOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  totalDistance_ASC
  totalDistance_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DistanceLogPreviousValues {
  id: ID!
  date: DateTime!
  totalDistance: Float!
}

type DistanceLogSubscriptionPayload {
  mutation: MutationType!
  node: DistanceLog
  updatedFields: [String!]
  previousValues: DistanceLogPreviousValues
}

input DistanceLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DistanceLogWhereInput
  AND: [DistanceLogSubscriptionWhereInput!]
  OR: [DistanceLogSubscriptionWhereInput!]
  NOT: [DistanceLogSubscriptionWhereInput!]
}

input DistanceLogUpdateInput {
  date: DateTime
  totalDistance: Float
  intradayData: DistanceDataUpdateManyInput
}

input DistanceLogWhereInput {
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
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  totalDistance: Float
  totalDistance_not: Float
  totalDistance_in: [Float!]
  totalDistance_not_in: [Float!]
  totalDistance_lt: Float
  totalDistance_lte: Float
  totalDistance_gt: Float
  totalDistance_gte: Float
  intradayData_every: DistanceDataWhereInput
  intradayData_some: DistanceDataWhereInput
  intradayData_none: DistanceDataWhereInput
  AND: [DistanceLogWhereInput!]
  OR: [DistanceLogWhereInput!]
  NOT: [DistanceLogWhereInput!]
}

input DistanceLogWhereUniqueInput {
  id: ID
}

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

type HeartData {
  id: ID!
  heartLogId: ID!
  dateTime: DateTime!
  heartRate: Float!
}

type HeartDataConnection {
  pageInfo: PageInfo!
  edges: [HeartDataEdge]!
  aggregate: AggregateHeartData!
}

input HeartDataCreateInput {
  heartLogId: ID!
  dateTime: DateTime!
  heartRate: Float!
}

input HeartDataCreateManyInput {
  create: [HeartDataCreateInput!]
  connect: [HeartDataWhereUniqueInput!]
}

type HeartDataEdge {
  node: HeartData!
  cursor: String!
}

enum HeartDataOrderByInput {
  id_ASC
  id_DESC
  heartLogId_ASC
  heartLogId_DESC
  dateTime_ASC
  dateTime_DESC
  heartRate_ASC
  heartRate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HeartDataPreviousValues {
  id: ID!
  heartLogId: ID!
  dateTime: DateTime!
  heartRate: Float!
}

type HeartDataSubscriptionPayload {
  mutation: MutationType!
  node: HeartData
  updatedFields: [String!]
  previousValues: HeartDataPreviousValues
}

input HeartDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HeartDataWhereInput
  AND: [HeartDataSubscriptionWhereInput!]
  OR: [HeartDataSubscriptionWhereInput!]
  NOT: [HeartDataSubscriptionWhereInput!]
}

input HeartDataUpdateDataInput {
  heartLogId: ID
  dateTime: DateTime
  heartRate: Float
}

input HeartDataUpdateInput {
  heartLogId: ID
  dateTime: DateTime
  heartRate: Float
}

input HeartDataUpdateManyInput {
  create: [HeartDataCreateInput!]
  update: [HeartDataUpdateWithWhereUniqueNestedInput!]
  upsert: [HeartDataUpsertWithWhereUniqueNestedInput!]
  delete: [HeartDataWhereUniqueInput!]
  connect: [HeartDataWhereUniqueInput!]
  disconnect: [HeartDataWhereUniqueInput!]
}

input HeartDataUpdateWithWhereUniqueNestedInput {
  where: HeartDataWhereUniqueInput!
  data: HeartDataUpdateDataInput!
}

input HeartDataUpsertWithWhereUniqueNestedInput {
  where: HeartDataWhereUniqueInput!
  update: HeartDataUpdateDataInput!
  create: HeartDataCreateInput!
}

input HeartDataWhereInput {
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
  heartLogId: ID
  heartLogId_not: ID
  heartLogId_in: [ID!]
  heartLogId_not_in: [ID!]
  heartLogId_lt: ID
  heartLogId_lte: ID
  heartLogId_gt: ID
  heartLogId_gte: ID
  heartLogId_contains: ID
  heartLogId_not_contains: ID
  heartLogId_starts_with: ID
  heartLogId_not_starts_with: ID
  heartLogId_ends_with: ID
  heartLogId_not_ends_with: ID
  dateTime: DateTime
  dateTime_not: DateTime
  dateTime_in: [DateTime!]
  dateTime_not_in: [DateTime!]
  dateTime_lt: DateTime
  dateTime_lte: DateTime
  dateTime_gt: DateTime
  dateTime_gte: DateTime
  heartRate: Float
  heartRate_not: Float
  heartRate_in: [Float!]
  heartRate_not_in: [Float!]
  heartRate_lt: Float
  heartRate_lte: Float
  heartRate_gt: Float
  heartRate_gte: Float
  AND: [HeartDataWhereInput!]
  OR: [HeartDataWhereInput!]
  NOT: [HeartDataWhereInput!]
}

input HeartDataWhereUniqueInput {
  id: ID
}

type HeartLog {
  id: ID!
  dateTime: DateTime!
  caloriesOutOfRange: Int!
  minutesOutOfRange: Int!
  maxValueOutOfRange: Int!
  minValueOutOfRange: Int!
  caloriesFatBurn: Int!
  minutesFatBurn: Int!
  maxValueFatBurn: Int!
  minValueFatBurn: Int!
  caloriesCardio: Int!
  minutesCardio: Int!
  maxValueCardio: Int!
  minValueCardio: Int!
  caloriesPeak: Int!
  minutesPeak: Int!
  maxValuePeak: Int!
  minValuePeak: Int!
  intradayData(where: HeartDataWhereInput, orderBy: HeartDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HeartData!]
}

type HeartLogConnection {
  pageInfo: PageInfo!
  edges: [HeartLogEdge]!
  aggregate: AggregateHeartLog!
}

input HeartLogCreateInput {
  dateTime: DateTime!
  caloriesOutOfRange: Int!
  minutesOutOfRange: Int!
  maxValueOutOfRange: Int!
  minValueOutOfRange: Int!
  caloriesFatBurn: Int!
  minutesFatBurn: Int!
  maxValueFatBurn: Int!
  minValueFatBurn: Int!
  caloriesCardio: Int!
  minutesCardio: Int!
  maxValueCardio: Int!
  minValueCardio: Int!
  caloriesPeak: Int!
  minutesPeak: Int!
  maxValuePeak: Int!
  minValuePeak: Int!
  intradayData: HeartDataCreateManyInput
}

type HeartLogEdge {
  node: HeartLog!
  cursor: String!
}

enum HeartLogOrderByInput {
  id_ASC
  id_DESC
  dateTime_ASC
  dateTime_DESC
  caloriesOutOfRange_ASC
  caloriesOutOfRange_DESC
  minutesOutOfRange_ASC
  minutesOutOfRange_DESC
  maxValueOutOfRange_ASC
  maxValueOutOfRange_DESC
  minValueOutOfRange_ASC
  minValueOutOfRange_DESC
  caloriesFatBurn_ASC
  caloriesFatBurn_DESC
  minutesFatBurn_ASC
  minutesFatBurn_DESC
  maxValueFatBurn_ASC
  maxValueFatBurn_DESC
  minValueFatBurn_ASC
  minValueFatBurn_DESC
  caloriesCardio_ASC
  caloriesCardio_DESC
  minutesCardio_ASC
  minutesCardio_DESC
  maxValueCardio_ASC
  maxValueCardio_DESC
  minValueCardio_ASC
  minValueCardio_DESC
  caloriesPeak_ASC
  caloriesPeak_DESC
  minutesPeak_ASC
  minutesPeak_DESC
  maxValuePeak_ASC
  maxValuePeak_DESC
  minValuePeak_ASC
  minValuePeak_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HeartLogPreviousValues {
  id: ID!
  dateTime: DateTime!
  caloriesOutOfRange: Int!
  minutesOutOfRange: Int!
  maxValueOutOfRange: Int!
  minValueOutOfRange: Int!
  caloriesFatBurn: Int!
  minutesFatBurn: Int!
  maxValueFatBurn: Int!
  minValueFatBurn: Int!
  caloriesCardio: Int!
  minutesCardio: Int!
  maxValueCardio: Int!
  minValueCardio: Int!
  caloriesPeak: Int!
  minutesPeak: Int!
  maxValuePeak: Int!
  minValuePeak: Int!
}

type HeartLogSubscriptionPayload {
  mutation: MutationType!
  node: HeartLog
  updatedFields: [String!]
  previousValues: HeartLogPreviousValues
}

input HeartLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HeartLogWhereInput
  AND: [HeartLogSubscriptionWhereInput!]
  OR: [HeartLogSubscriptionWhereInput!]
  NOT: [HeartLogSubscriptionWhereInput!]
}

input HeartLogUpdateInput {
  dateTime: DateTime
  caloriesOutOfRange: Int
  minutesOutOfRange: Int
  maxValueOutOfRange: Int
  minValueOutOfRange: Int
  caloriesFatBurn: Int
  minutesFatBurn: Int
  maxValueFatBurn: Int
  minValueFatBurn: Int
  caloriesCardio: Int
  minutesCardio: Int
  maxValueCardio: Int
  minValueCardio: Int
  caloriesPeak: Int
  minutesPeak: Int
  maxValuePeak: Int
  minValuePeak: Int
  intradayData: HeartDataUpdateManyInput
}

input HeartLogWhereInput {
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
  dateTime: DateTime
  dateTime_not: DateTime
  dateTime_in: [DateTime!]
  dateTime_not_in: [DateTime!]
  dateTime_lt: DateTime
  dateTime_lte: DateTime
  dateTime_gt: DateTime
  dateTime_gte: DateTime
  caloriesOutOfRange: Int
  caloriesOutOfRange_not: Int
  caloriesOutOfRange_in: [Int!]
  caloriesOutOfRange_not_in: [Int!]
  caloriesOutOfRange_lt: Int
  caloriesOutOfRange_lte: Int
  caloriesOutOfRange_gt: Int
  caloriesOutOfRange_gte: Int
  minutesOutOfRange: Int
  minutesOutOfRange_not: Int
  minutesOutOfRange_in: [Int!]
  minutesOutOfRange_not_in: [Int!]
  minutesOutOfRange_lt: Int
  minutesOutOfRange_lte: Int
  minutesOutOfRange_gt: Int
  minutesOutOfRange_gte: Int
  maxValueOutOfRange: Int
  maxValueOutOfRange_not: Int
  maxValueOutOfRange_in: [Int!]
  maxValueOutOfRange_not_in: [Int!]
  maxValueOutOfRange_lt: Int
  maxValueOutOfRange_lte: Int
  maxValueOutOfRange_gt: Int
  maxValueOutOfRange_gte: Int
  minValueOutOfRange: Int
  minValueOutOfRange_not: Int
  minValueOutOfRange_in: [Int!]
  minValueOutOfRange_not_in: [Int!]
  minValueOutOfRange_lt: Int
  minValueOutOfRange_lte: Int
  minValueOutOfRange_gt: Int
  minValueOutOfRange_gte: Int
  caloriesFatBurn: Int
  caloriesFatBurn_not: Int
  caloriesFatBurn_in: [Int!]
  caloriesFatBurn_not_in: [Int!]
  caloriesFatBurn_lt: Int
  caloriesFatBurn_lte: Int
  caloriesFatBurn_gt: Int
  caloriesFatBurn_gte: Int
  minutesFatBurn: Int
  minutesFatBurn_not: Int
  minutesFatBurn_in: [Int!]
  minutesFatBurn_not_in: [Int!]
  minutesFatBurn_lt: Int
  minutesFatBurn_lte: Int
  minutesFatBurn_gt: Int
  minutesFatBurn_gte: Int
  maxValueFatBurn: Int
  maxValueFatBurn_not: Int
  maxValueFatBurn_in: [Int!]
  maxValueFatBurn_not_in: [Int!]
  maxValueFatBurn_lt: Int
  maxValueFatBurn_lte: Int
  maxValueFatBurn_gt: Int
  maxValueFatBurn_gte: Int
  minValueFatBurn: Int
  minValueFatBurn_not: Int
  minValueFatBurn_in: [Int!]
  minValueFatBurn_not_in: [Int!]
  minValueFatBurn_lt: Int
  minValueFatBurn_lte: Int
  minValueFatBurn_gt: Int
  minValueFatBurn_gte: Int
  caloriesCardio: Int
  caloriesCardio_not: Int
  caloriesCardio_in: [Int!]
  caloriesCardio_not_in: [Int!]
  caloriesCardio_lt: Int
  caloriesCardio_lte: Int
  caloriesCardio_gt: Int
  caloriesCardio_gte: Int
  minutesCardio: Int
  minutesCardio_not: Int
  minutesCardio_in: [Int!]
  minutesCardio_not_in: [Int!]
  minutesCardio_lt: Int
  minutesCardio_lte: Int
  minutesCardio_gt: Int
  minutesCardio_gte: Int
  maxValueCardio: Int
  maxValueCardio_not: Int
  maxValueCardio_in: [Int!]
  maxValueCardio_not_in: [Int!]
  maxValueCardio_lt: Int
  maxValueCardio_lte: Int
  maxValueCardio_gt: Int
  maxValueCardio_gte: Int
  minValueCardio: Int
  minValueCardio_not: Int
  minValueCardio_in: [Int!]
  minValueCardio_not_in: [Int!]
  minValueCardio_lt: Int
  minValueCardio_lte: Int
  minValueCardio_gt: Int
  minValueCardio_gte: Int
  caloriesPeak: Int
  caloriesPeak_not: Int
  caloriesPeak_in: [Int!]
  caloriesPeak_not_in: [Int!]
  caloriesPeak_lt: Int
  caloriesPeak_lte: Int
  caloriesPeak_gt: Int
  caloriesPeak_gte: Int
  minutesPeak: Int
  minutesPeak_not: Int
  minutesPeak_in: [Int!]
  minutesPeak_not_in: [Int!]
  minutesPeak_lt: Int
  minutesPeak_lte: Int
  minutesPeak_gt: Int
  minutesPeak_gte: Int
  maxValuePeak: Int
  maxValuePeak_not: Int
  maxValuePeak_in: [Int!]
  maxValuePeak_not_in: [Int!]
  maxValuePeak_lt: Int
  maxValuePeak_lte: Int
  maxValuePeak_gt: Int
  maxValuePeak_gte: Int
  minValuePeak: Int
  minValuePeak_not: Int
  minValuePeak_in: [Int!]
  minValuePeak_not_in: [Int!]
  minValuePeak_lt: Int
  minValuePeak_lte: Int
  minValuePeak_gt: Int
  minValuePeak_gte: Int
  intradayData_every: HeartDataWhereInput
  intradayData_some: HeartDataWhereInput
  intradayData_none: HeartDataWhereInput
  AND: [HeartLogWhereInput!]
  OR: [HeartLogWhereInput!]
  NOT: [HeartLogWhereInput!]
}

input HeartLogWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCalorieData(data: CalorieDataCreateInput!): CalorieData!
  updateCalorieData(data: CalorieDataUpdateInput!, where: CalorieDataWhereUniqueInput!): CalorieData
  updateManyCalorieDatas(data: CalorieDataUpdateInput!, where: CalorieDataWhereInput): BatchPayload!
  upsertCalorieData(where: CalorieDataWhereUniqueInput!, create: CalorieDataCreateInput!, update: CalorieDataUpdateInput!): CalorieData!
  deleteCalorieData(where: CalorieDataWhereUniqueInput!): CalorieData
  deleteManyCalorieDatas(where: CalorieDataWhereInput): BatchPayload!
  createCalorieLog(data: CalorieLogCreateInput!): CalorieLog!
  updateCalorieLog(data: CalorieLogUpdateInput!, where: CalorieLogWhereUniqueInput!): CalorieLog
  updateManyCalorieLogs(data: CalorieLogUpdateInput!, where: CalorieLogWhereInput): BatchPayload!
  upsertCalorieLog(where: CalorieLogWhereUniqueInput!, create: CalorieLogCreateInput!, update: CalorieLogUpdateInput!): CalorieLog!
  deleteCalorieLog(where: CalorieLogWhereUniqueInput!): CalorieLog
  deleteManyCalorieLogs(where: CalorieLogWhereInput): BatchPayload!
  createDistanceData(data: DistanceDataCreateInput!): DistanceData!
  updateDistanceData(data: DistanceDataUpdateInput!, where: DistanceDataWhereUniqueInput!): DistanceData
  updateManyDistanceDatas(data: DistanceDataUpdateInput!, where: DistanceDataWhereInput): BatchPayload!
  upsertDistanceData(where: DistanceDataWhereUniqueInput!, create: DistanceDataCreateInput!, update: DistanceDataUpdateInput!): DistanceData!
  deleteDistanceData(where: DistanceDataWhereUniqueInput!): DistanceData
  deleteManyDistanceDatas(where: DistanceDataWhereInput): BatchPayload!
  createDistanceLog(data: DistanceLogCreateInput!): DistanceLog!
  updateDistanceLog(data: DistanceLogUpdateInput!, where: DistanceLogWhereUniqueInput!): DistanceLog
  updateManyDistanceLogs(data: DistanceLogUpdateInput!, where: DistanceLogWhereInput): BatchPayload!
  upsertDistanceLog(where: DistanceLogWhereUniqueInput!, create: DistanceLogCreateInput!, update: DistanceLogUpdateInput!): DistanceLog!
  deleteDistanceLog(where: DistanceLogWhereUniqueInput!): DistanceLog
  deleteManyDistanceLogs(where: DistanceLogWhereInput): BatchPayload!
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
  createHeartData(data: HeartDataCreateInput!): HeartData!
  updateHeartData(data: HeartDataUpdateInput!, where: HeartDataWhereUniqueInput!): HeartData
  updateManyHeartDatas(data: HeartDataUpdateInput!, where: HeartDataWhereInput): BatchPayload!
  upsertHeartData(where: HeartDataWhereUniqueInput!, create: HeartDataCreateInput!, update: HeartDataUpdateInput!): HeartData!
  deleteHeartData(where: HeartDataWhereUniqueInput!): HeartData
  deleteManyHeartDatas(where: HeartDataWhereInput): BatchPayload!
  createHeartLog(data: HeartLogCreateInput!): HeartLog!
  updateHeartLog(data: HeartLogUpdateInput!, where: HeartLogWhereUniqueInput!): HeartLog
  updateManyHeartLogs(data: HeartLogUpdateInput!, where: HeartLogWhereInput): BatchPayload!
  upsertHeartLog(where: HeartLogWhereUniqueInput!, create: HeartLogCreateInput!, update: HeartLogUpdateInput!): HeartLog!
  deleteHeartLog(where: HeartLogWhereUniqueInput!): HeartLog
  deleteManyHeartLogs(where: HeartLogWhereInput): BatchPayload!
  createRescueTimeAccount(data: RescueTimeAccountCreateInput!): RescueTimeAccount!
  updateRescueTimeAccount(data: RescueTimeAccountUpdateInput!, where: RescueTimeAccountWhereUniqueInput!): RescueTimeAccount
  updateManyRescueTimeAccounts(data: RescueTimeAccountUpdateInput!, where: RescueTimeAccountWhereInput): BatchPayload!
  upsertRescueTimeAccount(where: RescueTimeAccountWhereUniqueInput!, create: RescueTimeAccountCreateInput!, update: RescueTimeAccountUpdateInput!): RescueTimeAccount!
  deleteRescueTimeAccount(where: RescueTimeAccountWhereUniqueInput!): RescueTimeAccount
  deleteManyRescueTimeAccounts(where: RescueTimeAccountWhereInput): BatchPayload!
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
  createStepData(data: StepDataCreateInput!): StepData!
  updateStepData(data: StepDataUpdateInput!, where: StepDataWhereUniqueInput!): StepData
  updateManyStepDatas(data: StepDataUpdateInput!, where: StepDataWhereInput): BatchPayload!
  upsertStepData(where: StepDataWhereUniqueInput!, create: StepDataCreateInput!, update: StepDataUpdateInput!): StepData!
  deleteStepData(where: StepDataWhereUniqueInput!): StepData
  deleteManyStepDatas(where: StepDataWhereInput): BatchPayload!
  createStepLog(data: StepLogCreateInput!): StepLog!
  updateStepLog(data: StepLogUpdateInput!, where: StepLogWhereUniqueInput!): StepLog
  updateManyStepLogs(data: StepLogUpdateInput!, where: StepLogWhereInput): BatchPayload!
  upsertStepLog(where: StepLogWhereUniqueInput!, create: StepLogCreateInput!, update: StepLogUpdateInput!): StepLog!
  deleteStepLog(where: StepLogWhereUniqueInput!): StepLog
  deleteManyStepLogs(where: StepLogWhereInput): BatchPayload!
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
  calorieData(where: CalorieDataWhereUniqueInput!): CalorieData
  calorieDatas(where: CalorieDataWhereInput, orderBy: CalorieDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CalorieData]!
  calorieDatasConnection(where: CalorieDataWhereInput, orderBy: CalorieDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CalorieDataConnection!
  calorieLog(where: CalorieLogWhereUniqueInput!): CalorieLog
  calorieLogs(where: CalorieLogWhereInput, orderBy: CalorieLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CalorieLog]!
  calorieLogsConnection(where: CalorieLogWhereInput, orderBy: CalorieLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CalorieLogConnection!
  distanceData(where: DistanceDataWhereUniqueInput!): DistanceData
  distanceDatas(where: DistanceDataWhereInput, orderBy: DistanceDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DistanceData]!
  distanceDatasConnection(where: DistanceDataWhereInput, orderBy: DistanceDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DistanceDataConnection!
  distanceLog(where: DistanceLogWhereUniqueInput!): DistanceLog
  distanceLogs(where: DistanceLogWhereInput, orderBy: DistanceLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DistanceLog]!
  distanceLogsConnection(where: DistanceLogWhereInput, orderBy: DistanceLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DistanceLogConnection!
  fitbitAccount(where: FitbitAccountWhereUniqueInput!): FitbitAccount
  fitbitAccounts(where: FitbitAccountWhereInput, orderBy: FitbitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FitbitAccount]!
  fitbitAccountsConnection(where: FitbitAccountWhereInput, orderBy: FitbitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FitbitAccountConnection!
  googleFitAccount(where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  googleFitAccounts(where: GoogleFitAccountWhereInput, orderBy: GoogleFitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GoogleFitAccount]!
  googleFitAccountsConnection(where: GoogleFitAccountWhereInput, orderBy: GoogleFitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GoogleFitAccountConnection!
  heartData(where: HeartDataWhereUniqueInput!): HeartData
  heartDatas(where: HeartDataWhereInput, orderBy: HeartDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HeartData]!
  heartDatasConnection(where: HeartDataWhereInput, orderBy: HeartDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HeartDataConnection!
  heartLog(where: HeartLogWhereUniqueInput!): HeartLog
  heartLogs(where: HeartLogWhereInput, orderBy: HeartLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HeartLog]!
  heartLogsConnection(where: HeartLogWhereInput, orderBy: HeartLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HeartLogConnection!
  rescueTimeAccount(where: RescueTimeAccountWhereUniqueInput!): RescueTimeAccount
  rescueTimeAccounts(where: RescueTimeAccountWhereInput, orderBy: RescueTimeAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RescueTimeAccount]!
  rescueTimeAccountsConnection(where: RescueTimeAccountWhereInput, orderBy: RescueTimeAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RescueTimeAccountConnection!
  sleepData(where: SleepDataWhereUniqueInput!): SleepData
  sleepDatas(where: SleepDataWhereInput, orderBy: SleepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepData]!
  sleepDatasConnection(where: SleepDataWhereInput, orderBy: SleepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SleepDataConnection!
  sleepLog(where: SleepLogWhereUniqueInput!): SleepLog
  sleepLogs(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepLog]!
  sleepLogsConnection(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SleepLogConnection!
  stepData(where: StepDataWhereUniqueInput!): StepData
  stepDatas(where: StepDataWhereInput, orderBy: StepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StepData]!
  stepDatasConnection(where: StepDataWhereInput, orderBy: StepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StepDataConnection!
  stepLog(where: StepLogWhereUniqueInput!): StepLog
  stepLogs(where: StepLogWhereInput, orderBy: StepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StepLog]!
  stepLogsConnection(where: StepLogWhereInput, orderBy: StepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StepLogConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type RescueTimeAccount {
  id: ID!
  userId: ID!
  accessToken: String!
  scope: String!
}

type RescueTimeAccountConnection {
  pageInfo: PageInfo!
  edges: [RescueTimeAccountEdge]!
  aggregate: AggregateRescueTimeAccount!
}

input RescueTimeAccountCreateInput {
  userId: ID!
  accessToken: String!
  scope: String!
}

input RescueTimeAccountCreateOneInput {
  create: RescueTimeAccountCreateInput
  connect: RescueTimeAccountWhereUniqueInput
}

type RescueTimeAccountEdge {
  node: RescueTimeAccount!
  cursor: String!
}

enum RescueTimeAccountOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  accessToken_ASC
  accessToken_DESC
  scope_ASC
  scope_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RescueTimeAccountPreviousValues {
  id: ID!
  userId: ID!
  accessToken: String!
  scope: String!
}

type RescueTimeAccountSubscriptionPayload {
  mutation: MutationType!
  node: RescueTimeAccount
  updatedFields: [String!]
  previousValues: RescueTimeAccountPreviousValues
}

input RescueTimeAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RescueTimeAccountWhereInput
  AND: [RescueTimeAccountSubscriptionWhereInput!]
  OR: [RescueTimeAccountSubscriptionWhereInput!]
  NOT: [RescueTimeAccountSubscriptionWhereInput!]
}

input RescueTimeAccountUpdateDataInput {
  userId: ID
  accessToken: String
  scope: String
}

input RescueTimeAccountUpdateInput {
  userId: ID
  accessToken: String
  scope: String
}

input RescueTimeAccountUpdateOneInput {
  create: RescueTimeAccountCreateInput
  update: RescueTimeAccountUpdateDataInput
  upsert: RescueTimeAccountUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: RescueTimeAccountWhereUniqueInput
}

input RescueTimeAccountUpsertNestedInput {
  update: RescueTimeAccountUpdateDataInput!
  create: RescueTimeAccountCreateInput!
}

input RescueTimeAccountWhereInput {
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
  scope: String
  scope_not: String
  scope_in: [String!]
  scope_not_in: [String!]
  scope_lt: String
  scope_lte: String
  scope_gt: String
  scope_gte: String
  scope_contains: String
  scope_not_contains: String
  scope_starts_with: String
  scope_not_starts_with: String
  scope_ends_with: String
  scope_not_ends_with: String
  AND: [RescueTimeAccountWhereInput!]
  OR: [RescueTimeAccountWhereInput!]
  NOT: [RescueTimeAccountWhereInput!]
}

input RescueTimeAccountWhereUniqueInput {
  id: ID
  userId: ID
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
  logId: Float!
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
  summaryDeepThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryAsleepCount: Int
  summaryAsleepMinutes: Int
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
  logId: Float!
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
  summaryDeepThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryAsleepCount: Int
  summaryAsleepMinutes: Int
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
  summaryDeepThirtyDayAvgMinutes_ASC
  summaryDeepThirtyDayAvgMinutes_DESC
  summaryLightCount_ASC
  summaryLightCount_DESC
  summaryLightMinutes_ASC
  summaryLightMinutes_DESC
  summaryLightThirtyDayAvgMinutes_ASC
  summaryLightThirtyDayAvgMinutes_DESC
  summaryRemCount_ASC
  summaryRemCount_DESC
  summaryRemMinutes_ASC
  summaryRemMinutes_DESC
  summaryRemThirtyDayAvgMinutes_ASC
  summaryRemThirtyDayAvgMinutes_DESC
  summaryWakeCount_ASC
  summaryWakeCount_DESC
  summaryWakeMinutes_ASC
  summaryWakeMinutes_DESC
  summaryWakeThirtyDayAvgMinutes_ASC
  summaryWakeThirtyDayAvgMinutes_DESC
  summaryAsleepCount_ASC
  summaryAsleepCount_DESC
  summaryAsleepMinutes_ASC
  summaryAsleepMinutes_DESC
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
  logId: Float!
  minutesAfterWakeup: Int!
  minutesAsleep: Int!
  minutesAwake: Int!
  minutesToFallAsleep: Int!
  startTime: DateTime!
  timeInBed: Int!
  type: String
  summaryDeepCount: Int
  summaryDeepMinutes: Int
  summaryDeepThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryAsleepCount: Int
  summaryAsleepMinutes: Int
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
  logId: Float
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
  summaryDeepThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryAsleepCount: Int
  summaryAsleepMinutes: Int
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
  logId: Float
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
  summaryDeepThirtyDayAvgMinutes: Int
  summaryLightCount: Int
  summaryLightMinutes: Int
  summaryLightThirtyDayAvgMinutes: Int
  summaryRemCount: Int
  summaryRemMinutes: Int
  summaryRemThirtyDayAvgMinutes: Int
  summaryWakeCount: Int
  summaryWakeMinutes: Int
  summaryWakeThirtyDayAvgMinutes: Int
  summaryAsleepCount: Int
  summaryAsleepMinutes: Int
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
  logId: Float
  logId_not: Float
  logId_in: [Float!]
  logId_not_in: [Float!]
  logId_lt: Float
  logId_lte: Float
  logId_gt: Float
  logId_gte: Float
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
  summaryDeepThirtyDayAvgMinutes: Int
  summaryDeepThirtyDayAvgMinutes_not: Int
  summaryDeepThirtyDayAvgMinutes_in: [Int!]
  summaryDeepThirtyDayAvgMinutes_not_in: [Int!]
  summaryDeepThirtyDayAvgMinutes_lt: Int
  summaryDeepThirtyDayAvgMinutes_lte: Int
  summaryDeepThirtyDayAvgMinutes_gt: Int
  summaryDeepThirtyDayAvgMinutes_gte: Int
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
  summaryLightThirtyDayAvgMinutes: Int
  summaryLightThirtyDayAvgMinutes_not: Int
  summaryLightThirtyDayAvgMinutes_in: [Int!]
  summaryLightThirtyDayAvgMinutes_not_in: [Int!]
  summaryLightThirtyDayAvgMinutes_lt: Int
  summaryLightThirtyDayAvgMinutes_lte: Int
  summaryLightThirtyDayAvgMinutes_gt: Int
  summaryLightThirtyDayAvgMinutes_gte: Int
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
  summaryRemThirtyDayAvgMinutes: Int
  summaryRemThirtyDayAvgMinutes_not: Int
  summaryRemThirtyDayAvgMinutes_in: [Int!]
  summaryRemThirtyDayAvgMinutes_not_in: [Int!]
  summaryRemThirtyDayAvgMinutes_lt: Int
  summaryRemThirtyDayAvgMinutes_lte: Int
  summaryRemThirtyDayAvgMinutes_gt: Int
  summaryRemThirtyDayAvgMinutes_gte: Int
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
  summaryWakeThirtyDayAvgMinutes: Int
  summaryWakeThirtyDayAvgMinutes_not: Int
  summaryWakeThirtyDayAvgMinutes_in: [Int!]
  summaryWakeThirtyDayAvgMinutes_not_in: [Int!]
  summaryWakeThirtyDayAvgMinutes_lt: Int
  summaryWakeThirtyDayAvgMinutes_lte: Int
  summaryWakeThirtyDayAvgMinutes_gt: Int
  summaryWakeThirtyDayAvgMinutes_gte: Int
  summaryAsleepCount: Int
  summaryAsleepCount_not: Int
  summaryAsleepCount_in: [Int!]
  summaryAsleepCount_not_in: [Int!]
  summaryAsleepCount_lt: Int
  summaryAsleepCount_lte: Int
  summaryAsleepCount_gt: Int
  summaryAsleepCount_gte: Int
  summaryAsleepMinutes: Int
  summaryAsleepMinutes_not: Int
  summaryAsleepMinutes_in: [Int!]
  summaryAsleepMinutes_not_in: [Int!]
  summaryAsleepMinutes_lt: Int
  summaryAsleepMinutes_lte: Int
  summaryAsleepMinutes_gt: Int
  summaryAsleepMinutes_gte: Int
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

type StepData {
  id: ID!
  stepLogId: ID!
  dateTime: DateTime!
  steps: Int!
}

type StepDataConnection {
  pageInfo: PageInfo!
  edges: [StepDataEdge]!
  aggregate: AggregateStepData!
}

input StepDataCreateInput {
  stepLogId: ID!
  dateTime: DateTime!
  steps: Int!
}

input StepDataCreateManyInput {
  create: [StepDataCreateInput!]
  connect: [StepDataWhereUniqueInput!]
}

type StepDataEdge {
  node: StepData!
  cursor: String!
}

enum StepDataOrderByInput {
  id_ASC
  id_DESC
  stepLogId_ASC
  stepLogId_DESC
  dateTime_ASC
  dateTime_DESC
  steps_ASC
  steps_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StepDataPreviousValues {
  id: ID!
  stepLogId: ID!
  dateTime: DateTime!
  steps: Int!
}

type StepDataSubscriptionPayload {
  mutation: MutationType!
  node: StepData
  updatedFields: [String!]
  previousValues: StepDataPreviousValues
}

input StepDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StepDataWhereInput
  AND: [StepDataSubscriptionWhereInput!]
  OR: [StepDataSubscriptionWhereInput!]
  NOT: [StepDataSubscriptionWhereInput!]
}

input StepDataUpdateDataInput {
  stepLogId: ID
  dateTime: DateTime
  steps: Int
}

input StepDataUpdateInput {
  stepLogId: ID
  dateTime: DateTime
  steps: Int
}

input StepDataUpdateManyInput {
  create: [StepDataCreateInput!]
  update: [StepDataUpdateWithWhereUniqueNestedInput!]
  upsert: [StepDataUpsertWithWhereUniqueNestedInput!]
  delete: [StepDataWhereUniqueInput!]
  connect: [StepDataWhereUniqueInput!]
  disconnect: [StepDataWhereUniqueInput!]
}

input StepDataUpdateWithWhereUniqueNestedInput {
  where: StepDataWhereUniqueInput!
  data: StepDataUpdateDataInput!
}

input StepDataUpsertWithWhereUniqueNestedInput {
  where: StepDataWhereUniqueInput!
  update: StepDataUpdateDataInput!
  create: StepDataCreateInput!
}

input StepDataWhereInput {
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
  stepLogId: ID
  stepLogId_not: ID
  stepLogId_in: [ID!]
  stepLogId_not_in: [ID!]
  stepLogId_lt: ID
  stepLogId_lte: ID
  stepLogId_gt: ID
  stepLogId_gte: ID
  stepLogId_contains: ID
  stepLogId_not_contains: ID
  stepLogId_starts_with: ID
  stepLogId_not_starts_with: ID
  stepLogId_ends_with: ID
  stepLogId_not_ends_with: ID
  dateTime: DateTime
  dateTime_not: DateTime
  dateTime_in: [DateTime!]
  dateTime_not_in: [DateTime!]
  dateTime_lt: DateTime
  dateTime_lte: DateTime
  dateTime_gt: DateTime
  dateTime_gte: DateTime
  steps: Int
  steps_not: Int
  steps_in: [Int!]
  steps_not_in: [Int!]
  steps_lt: Int
  steps_lte: Int
  steps_gt: Int
  steps_gte: Int
  AND: [StepDataWhereInput!]
  OR: [StepDataWhereInput!]
  NOT: [StepDataWhereInput!]
}

input StepDataWhereUniqueInput {
  id: ID
}

type StepLog {
  id: ID!
  date: DateTime!
  totalSteps: Int!
  intradayData(where: StepDataWhereInput, orderBy: StepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StepData!]
}

type StepLogConnection {
  pageInfo: PageInfo!
  edges: [StepLogEdge]!
  aggregate: AggregateStepLog!
}

input StepLogCreateInput {
  date: DateTime!
  totalSteps: Int!
  intradayData: StepDataCreateManyInput
}

type StepLogEdge {
  node: StepLog!
  cursor: String!
}

enum StepLogOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  totalSteps_ASC
  totalSteps_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StepLogPreviousValues {
  id: ID!
  date: DateTime!
  totalSteps: Int!
}

type StepLogSubscriptionPayload {
  mutation: MutationType!
  node: StepLog
  updatedFields: [String!]
  previousValues: StepLogPreviousValues
}

input StepLogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StepLogWhereInput
  AND: [StepLogSubscriptionWhereInput!]
  OR: [StepLogSubscriptionWhereInput!]
  NOT: [StepLogSubscriptionWhereInput!]
}

input StepLogUpdateInput {
  date: DateTime
  totalSteps: Int
  intradayData: StepDataUpdateManyInput
}

input StepLogWhereInput {
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
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  totalSteps: Int
  totalSteps_not: Int
  totalSteps_in: [Int!]
  totalSteps_not_in: [Int!]
  totalSteps_lt: Int
  totalSteps_lte: Int
  totalSteps_gt: Int
  totalSteps_gte: Int
  intradayData_every: StepDataWhereInput
  intradayData_some: StepDataWhereInput
  intradayData_none: StepDataWhereInput
  AND: [StepLogWhereInput!]
  OR: [StepLogWhereInput!]
  NOT: [StepLogWhereInput!]
}

input StepLogWhereUniqueInput {
  id: ID
}

type Subscription {
  calorieData(where: CalorieDataSubscriptionWhereInput): CalorieDataSubscriptionPayload
  calorieLog(where: CalorieLogSubscriptionWhereInput): CalorieLogSubscriptionPayload
  distanceData(where: DistanceDataSubscriptionWhereInput): DistanceDataSubscriptionPayload
  distanceLog(where: DistanceLogSubscriptionWhereInput): DistanceLogSubscriptionPayload
  fitbitAccount(where: FitbitAccountSubscriptionWhereInput): FitbitAccountSubscriptionPayload
  googleFitAccount(where: GoogleFitAccountSubscriptionWhereInput): GoogleFitAccountSubscriptionPayload
  heartData(where: HeartDataSubscriptionWhereInput): HeartDataSubscriptionPayload
  heartLog(where: HeartLogSubscriptionWhereInput): HeartLogSubscriptionPayload
  rescueTimeAccount(where: RescueTimeAccountSubscriptionWhereInput): RescueTimeAccountSubscriptionPayload
  sleepData(where: SleepDataSubscriptionWhereInput): SleepDataSubscriptionPayload
  sleepLog(where: SleepLogSubscriptionWhereInput): SleepLogSubscriptionPayload
  stepData(where: StepDataSubscriptionWhereInput): StepDataSubscriptionPayload
  stepLog(where: StepLogSubscriptionWhereInput): StepLogSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccount
  fitbitAccount: FitbitAccount
  rescueTimeAcccount: RescueTimeAccount
  sleepLogs(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepLog!]
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
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
  rescueTimeAcccount: RescueTimeAccountCreateOneInput
  sleepLogs: SleepLogCreateManyInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
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
  sleepLogLastUpdatedDate_ASC
  sleepLogLastUpdatedDate_DESC
  productivityLogLastUpdatedDate_ASC
  productivityLogLastUpdatedDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
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
  rescueTimeAcccount: RescueTimeAccountUpdateOneInput
  sleepLogs: SleepLogUpdateManyInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
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
  rescueTimeAcccount: RescueTimeAccountWhereInput
  sleepLogs_every: SleepLogWhereInput
  sleepLogs_some: SleepLogWhereInput
  sleepLogs_none: SleepLogWhereInput
  sleepLogLastUpdatedDate: DateTime
  sleepLogLastUpdatedDate_not: DateTime
  sleepLogLastUpdatedDate_in: [DateTime!]
  sleepLogLastUpdatedDate_not_in: [DateTime!]
  sleepLogLastUpdatedDate_lt: DateTime
  sleepLogLastUpdatedDate_lte: DateTime
  sleepLogLastUpdatedDate_gt: DateTime
  sleepLogLastUpdatedDate_gte: DateTime
  productivityLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate_not: DateTime
  productivityLogLastUpdatedDate_in: [DateTime!]
  productivityLogLastUpdatedDate_not_in: [DateTime!]
  productivityLogLastUpdatedDate_lt: DateTime
  productivityLogLastUpdatedDate_lte: DateTime
  productivityLogLastUpdatedDate_gt: DateTime
  productivityLogLastUpdatedDate_gte: DateTime
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