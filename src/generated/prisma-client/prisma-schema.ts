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
  calorieLog: CalorieLog!
  dateTime: DateTime!
  calories: Float!
}

type CalorieDataConnection {
  pageInfo: PageInfo!
  edges: [CalorieDataEdge]!
  aggregate: AggregateCalorieData!
}

input CalorieDataCreateInput {
  calorieLog: CalorieLogCreateOneWithoutCalorieDataInput!
  dateTime: DateTime!
  calories: Float!
}

input CalorieDataCreateManyWithoutCalorieLogInput {
  create: [CalorieDataCreateWithoutCalorieLogInput!]
  connect: [CalorieDataWhereUniqueInput!]
}

input CalorieDataCreateWithoutCalorieLogInput {
  dateTime: DateTime!
  calories: Float!
}

type CalorieDataEdge {
  node: CalorieData!
  cursor: String!
}

enum CalorieDataOrderByInput {
  id_ASC
  id_DESC
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

input CalorieDataUpdateInput {
  calorieLog: CalorieLogUpdateOneRequiredWithoutCalorieDataInput
  dateTime: DateTime
  calories: Float
}

input CalorieDataUpdateManyWithoutCalorieLogInput {
  create: [CalorieDataCreateWithoutCalorieLogInput!]
  delete: [CalorieDataWhereUniqueInput!]
  connect: [CalorieDataWhereUniqueInput!]
  disconnect: [CalorieDataWhereUniqueInput!]
  update: [CalorieDataUpdateWithWhereUniqueWithoutCalorieLogInput!]
  upsert: [CalorieDataUpsertWithWhereUniqueWithoutCalorieLogInput!]
}

input CalorieDataUpdateWithoutCalorieLogDataInput {
  dateTime: DateTime
  calories: Float
}

input CalorieDataUpdateWithWhereUniqueWithoutCalorieLogInput {
  where: CalorieDataWhereUniqueInput!
  data: CalorieDataUpdateWithoutCalorieLogDataInput!
}

input CalorieDataUpsertWithWhereUniqueWithoutCalorieLogInput {
  where: CalorieDataWhereUniqueInput!
  update: CalorieDataUpdateWithoutCalorieLogDataInput!
  create: CalorieDataCreateWithoutCalorieLogInput!
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
  calorieLog: CalorieLogWhereInput
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
  user: User!
  date: DateTime!
  totalCalories: Float!
  calorieData(where: CalorieDataWhereInput, orderBy: CalorieDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CalorieData!]
}

type CalorieLogConnection {
  pageInfo: PageInfo!
  edges: [CalorieLogEdge]!
  aggregate: AggregateCalorieLog!
}

input CalorieLogCreateInput {
  user: UserCreateOneWithoutCalorieLogsInput!
  date: DateTime!
  totalCalories: Float!
  calorieData: CalorieDataCreateManyWithoutCalorieLogInput
}

input CalorieLogCreateManyWithoutUserInput {
  create: [CalorieLogCreateWithoutUserInput!]
  connect: [CalorieLogWhereUniqueInput!]
}

input CalorieLogCreateOneWithoutCalorieDataInput {
  create: CalorieLogCreateWithoutCalorieDataInput
  connect: CalorieLogWhereUniqueInput
}

input CalorieLogCreateWithoutCalorieDataInput {
  user: UserCreateOneWithoutCalorieLogsInput!
  date: DateTime!
  totalCalories: Float!
}

input CalorieLogCreateWithoutUserInput {
  date: DateTime!
  totalCalories: Float!
  calorieData: CalorieDataCreateManyWithoutCalorieLogInput
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
  user: UserUpdateOneRequiredWithoutCalorieLogsInput
  date: DateTime
  totalCalories: Float
  calorieData: CalorieDataUpdateManyWithoutCalorieLogInput
}

input CalorieLogUpdateManyWithoutUserInput {
  create: [CalorieLogCreateWithoutUserInput!]
  delete: [CalorieLogWhereUniqueInput!]
  connect: [CalorieLogWhereUniqueInput!]
  disconnect: [CalorieLogWhereUniqueInput!]
  update: [CalorieLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CalorieLogUpsertWithWhereUniqueWithoutUserInput!]
}

input CalorieLogUpdateOneRequiredWithoutCalorieDataInput {
  create: CalorieLogCreateWithoutCalorieDataInput
  update: CalorieLogUpdateWithoutCalorieDataDataInput
  upsert: CalorieLogUpsertWithoutCalorieDataInput
  connect: CalorieLogWhereUniqueInput
}

input CalorieLogUpdateWithoutCalorieDataDataInput {
  user: UserUpdateOneRequiredWithoutCalorieLogsInput
  date: DateTime
  totalCalories: Float
}

input CalorieLogUpdateWithoutUserDataInput {
  date: DateTime
  totalCalories: Float
  calorieData: CalorieDataUpdateManyWithoutCalorieLogInput
}

input CalorieLogUpdateWithWhereUniqueWithoutUserInput {
  where: CalorieLogWhereUniqueInput!
  data: CalorieLogUpdateWithoutUserDataInput!
}

input CalorieLogUpsertWithoutCalorieDataInput {
  update: CalorieLogUpdateWithoutCalorieDataDataInput!
  create: CalorieLogCreateWithoutCalorieDataInput!
}

input CalorieLogUpsertWithWhereUniqueWithoutUserInput {
  where: CalorieLogWhereUniqueInput!
  update: CalorieLogUpdateWithoutUserDataInput!
  create: CalorieLogCreateWithoutUserInput!
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
  user: UserWhereInput
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
  calorieData_every: CalorieDataWhereInput
  calorieData_some: CalorieDataWhereInput
  calorieData_none: CalorieDataWhereInput
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
  distanceLog: DistanceLog!
  dateTime: DateTime!
  distance: Float!
}

type DistanceDataConnection {
  pageInfo: PageInfo!
  edges: [DistanceDataEdge]!
  aggregate: AggregateDistanceData!
}

input DistanceDataCreateInput {
  distanceLog: DistanceLogCreateOneWithoutDistanceDataInput!
  dateTime: DateTime!
  distance: Float!
}

input DistanceDataCreateManyWithoutDistanceLogInput {
  create: [DistanceDataCreateWithoutDistanceLogInput!]
  connect: [DistanceDataWhereUniqueInput!]
}

input DistanceDataCreateWithoutDistanceLogInput {
  dateTime: DateTime!
  distance: Float!
}

type DistanceDataEdge {
  node: DistanceData!
  cursor: String!
}

enum DistanceDataOrderByInput {
  id_ASC
  id_DESC
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

input DistanceDataUpdateInput {
  distanceLog: DistanceLogUpdateOneRequiredWithoutDistanceDataInput
  dateTime: DateTime
  distance: Float
}

input DistanceDataUpdateManyWithoutDistanceLogInput {
  create: [DistanceDataCreateWithoutDistanceLogInput!]
  delete: [DistanceDataWhereUniqueInput!]
  connect: [DistanceDataWhereUniqueInput!]
  disconnect: [DistanceDataWhereUniqueInput!]
  update: [DistanceDataUpdateWithWhereUniqueWithoutDistanceLogInput!]
  upsert: [DistanceDataUpsertWithWhereUniqueWithoutDistanceLogInput!]
}

input DistanceDataUpdateWithoutDistanceLogDataInput {
  dateTime: DateTime
  distance: Float
}

input DistanceDataUpdateWithWhereUniqueWithoutDistanceLogInput {
  where: DistanceDataWhereUniqueInput!
  data: DistanceDataUpdateWithoutDistanceLogDataInput!
}

input DistanceDataUpsertWithWhereUniqueWithoutDistanceLogInput {
  where: DistanceDataWhereUniqueInput!
  update: DistanceDataUpdateWithoutDistanceLogDataInput!
  create: DistanceDataCreateWithoutDistanceLogInput!
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
  distanceLog: DistanceLogWhereInput
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
  user: User!
  date: DateTime!
  totalDistance: Float!
  distanceData(where: DistanceDataWhereInput, orderBy: DistanceDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DistanceData!]
}

type DistanceLogConnection {
  pageInfo: PageInfo!
  edges: [DistanceLogEdge]!
  aggregate: AggregateDistanceLog!
}

input DistanceLogCreateInput {
  user: UserCreateOneWithoutDistanceLogsInput!
  date: DateTime!
  totalDistance: Float!
  distanceData: DistanceDataCreateManyWithoutDistanceLogInput
}

input DistanceLogCreateManyWithoutUserInput {
  create: [DistanceLogCreateWithoutUserInput!]
  connect: [DistanceLogWhereUniqueInput!]
}

input DistanceLogCreateOneWithoutDistanceDataInput {
  create: DistanceLogCreateWithoutDistanceDataInput
  connect: DistanceLogWhereUniqueInput
}

input DistanceLogCreateWithoutDistanceDataInput {
  user: UserCreateOneWithoutDistanceLogsInput!
  date: DateTime!
  totalDistance: Float!
}

input DistanceLogCreateWithoutUserInput {
  date: DateTime!
  totalDistance: Float!
  distanceData: DistanceDataCreateManyWithoutDistanceLogInput
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
  user: UserUpdateOneRequiredWithoutDistanceLogsInput
  date: DateTime
  totalDistance: Float
  distanceData: DistanceDataUpdateManyWithoutDistanceLogInput
}

input DistanceLogUpdateManyWithoutUserInput {
  create: [DistanceLogCreateWithoutUserInput!]
  delete: [DistanceLogWhereUniqueInput!]
  connect: [DistanceLogWhereUniqueInput!]
  disconnect: [DistanceLogWhereUniqueInput!]
  update: [DistanceLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [DistanceLogUpsertWithWhereUniqueWithoutUserInput!]
}

input DistanceLogUpdateOneRequiredWithoutDistanceDataInput {
  create: DistanceLogCreateWithoutDistanceDataInput
  update: DistanceLogUpdateWithoutDistanceDataDataInput
  upsert: DistanceLogUpsertWithoutDistanceDataInput
  connect: DistanceLogWhereUniqueInput
}

input DistanceLogUpdateWithoutDistanceDataDataInput {
  user: UserUpdateOneRequiredWithoutDistanceLogsInput
  date: DateTime
  totalDistance: Float
}

input DistanceLogUpdateWithoutUserDataInput {
  date: DateTime
  totalDistance: Float
  distanceData: DistanceDataUpdateManyWithoutDistanceLogInput
}

input DistanceLogUpdateWithWhereUniqueWithoutUserInput {
  where: DistanceLogWhereUniqueInput!
  data: DistanceLogUpdateWithoutUserDataInput!
}

input DistanceLogUpsertWithoutDistanceDataInput {
  update: DistanceLogUpdateWithoutDistanceDataDataInput!
  create: DistanceLogCreateWithoutDistanceDataInput!
}

input DistanceLogUpsertWithWhereUniqueWithoutUserInput {
  where: DistanceLogWhereUniqueInput!
  update: DistanceLogUpdateWithoutUserDataInput!
  create: DistanceLogCreateWithoutUserInput!
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
  user: UserWhereInput
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
  distanceData_every: DistanceDataWhereInput
  distanceData_some: DistanceDataWhereInput
  distanceData_none: DistanceDataWhereInput
  AND: [DistanceLogWhereInput!]
  OR: [DistanceLogWhereInput!]
  NOT: [DistanceLogWhereInput!]
}

input DistanceLogWhereUniqueInput {
  id: ID
}

type FitbitAccount {
  id: ID!
  user: User!
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
  user: UserCreateOneWithoutFitbitAccountInput!
  fitbitUserId: String!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

input FitbitAccountCreateOneWithoutUserInput {
  create: FitbitAccountCreateWithoutUserInput
  connect: FitbitAccountWhereUniqueInput
}

input FitbitAccountCreateWithoutUserInput {
  fitbitUserId: String!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

type FitbitAccountEdge {
  node: FitbitAccount!
  cursor: String!
}

enum FitbitAccountOrderByInput {
  id_ASC
  id_DESC
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

input FitbitAccountUpdateInput {
  user: UserUpdateOneRequiredWithoutFitbitAccountInput
  fitbitUserId: String
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input FitbitAccountUpdateOneWithoutUserInput {
  create: FitbitAccountCreateWithoutUserInput
  update: FitbitAccountUpdateWithoutUserDataInput
  upsert: FitbitAccountUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: FitbitAccountWhereUniqueInput
}

input FitbitAccountUpdateWithoutUserDataInput {
  fitbitUserId: String
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input FitbitAccountUpsertWithoutUserInput {
  update: FitbitAccountUpdateWithoutUserDataInput!
  create: FitbitAccountCreateWithoutUserInput!
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
  user: UserWhereInput
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
}

type GoogleFitAccount {
  id: ID!
  user: User!
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
  user: UserCreateOneWithoutGoogleFitAccountInput!
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

input GoogleFitAccountCreateOneWithoutUserInput {
  create: GoogleFitAccountCreateWithoutUserInput
  connect: GoogleFitAccountWhereUniqueInput
}

input GoogleFitAccountCreateWithoutUserInput {
  refreshToken: String!
  accessToken: String!
  expiration: DateTime!
}

type GoogleFitAccountEdge {
  node: GoogleFitAccount!
  cursor: String!
}

enum GoogleFitAccountOrderByInput {
  id_ASC
  id_DESC
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

input GoogleFitAccountUpdateInput {
  user: UserUpdateOneRequiredWithoutGoogleFitAccountInput
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input GoogleFitAccountUpdateOneWithoutUserInput {
  create: GoogleFitAccountCreateWithoutUserInput
  update: GoogleFitAccountUpdateWithoutUserDataInput
  upsert: GoogleFitAccountUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: GoogleFitAccountWhereUniqueInput
}

input GoogleFitAccountUpdateWithoutUserDataInput {
  refreshToken: String
  accessToken: String
  expiration: DateTime
}

input GoogleFitAccountUpsertWithoutUserInput {
  update: GoogleFitAccountUpdateWithoutUserDataInput!
  create: GoogleFitAccountCreateWithoutUserInput!
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
  user: UserWhereInput
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
}

type HeartData {
  id: ID!
  heartLog: HeartLog!
  dateTime: DateTime!
  heartRate: Float!
}

type HeartDataConnection {
  pageInfo: PageInfo!
  edges: [HeartDataEdge]!
  aggregate: AggregateHeartData!
}

input HeartDataCreateInput {
  heartLog: HeartLogCreateOneWithoutHeartDataInput!
  dateTime: DateTime!
  heartRate: Float!
}

input HeartDataCreateManyWithoutHeartLogInput {
  create: [HeartDataCreateWithoutHeartLogInput!]
  connect: [HeartDataWhereUniqueInput!]
}

input HeartDataCreateWithoutHeartLogInput {
  dateTime: DateTime!
  heartRate: Float!
}

type HeartDataEdge {
  node: HeartData!
  cursor: String!
}

enum HeartDataOrderByInput {
  id_ASC
  id_DESC
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

input HeartDataUpdateInput {
  heartLog: HeartLogUpdateOneRequiredWithoutHeartDataInput
  dateTime: DateTime
  heartRate: Float
}

input HeartDataUpdateManyWithoutHeartLogInput {
  create: [HeartDataCreateWithoutHeartLogInput!]
  delete: [HeartDataWhereUniqueInput!]
  connect: [HeartDataWhereUniqueInput!]
  disconnect: [HeartDataWhereUniqueInput!]
  update: [HeartDataUpdateWithWhereUniqueWithoutHeartLogInput!]
  upsert: [HeartDataUpsertWithWhereUniqueWithoutHeartLogInput!]
}

input HeartDataUpdateWithoutHeartLogDataInput {
  dateTime: DateTime
  heartRate: Float
}

input HeartDataUpdateWithWhereUniqueWithoutHeartLogInput {
  where: HeartDataWhereUniqueInput!
  data: HeartDataUpdateWithoutHeartLogDataInput!
}

input HeartDataUpsertWithWhereUniqueWithoutHeartLogInput {
  where: HeartDataWhereUniqueInput!
  update: HeartDataUpdateWithoutHeartLogDataInput!
  create: HeartDataCreateWithoutHeartLogInput!
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
  heartLog: HeartLogWhereInput
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
  user: User!
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
  heartData(where: HeartDataWhereInput, orderBy: HeartDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HeartData!]
}

type HeartLogConnection {
  pageInfo: PageInfo!
  edges: [HeartLogEdge]!
  aggregate: AggregateHeartLog!
}

input HeartLogCreateInput {
  user: UserCreateOneWithoutHeartLogsInput!
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
  heartData: HeartDataCreateManyWithoutHeartLogInput
}

input HeartLogCreateManyWithoutUserInput {
  create: [HeartLogCreateWithoutUserInput!]
  connect: [HeartLogWhereUniqueInput!]
}

input HeartLogCreateOneWithoutHeartDataInput {
  create: HeartLogCreateWithoutHeartDataInput
  connect: HeartLogWhereUniqueInput
}

input HeartLogCreateWithoutHeartDataInput {
  user: UserCreateOneWithoutHeartLogsInput!
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

input HeartLogCreateWithoutUserInput {
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
  heartData: HeartDataCreateManyWithoutHeartLogInput
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
  user: UserUpdateOneRequiredWithoutHeartLogsInput
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
  heartData: HeartDataUpdateManyWithoutHeartLogInput
}

input HeartLogUpdateManyWithoutUserInput {
  create: [HeartLogCreateWithoutUserInput!]
  delete: [HeartLogWhereUniqueInput!]
  connect: [HeartLogWhereUniqueInput!]
  disconnect: [HeartLogWhereUniqueInput!]
  update: [HeartLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [HeartLogUpsertWithWhereUniqueWithoutUserInput!]
}

input HeartLogUpdateOneRequiredWithoutHeartDataInput {
  create: HeartLogCreateWithoutHeartDataInput
  update: HeartLogUpdateWithoutHeartDataDataInput
  upsert: HeartLogUpsertWithoutHeartDataInput
  connect: HeartLogWhereUniqueInput
}

input HeartLogUpdateWithoutHeartDataDataInput {
  user: UserUpdateOneRequiredWithoutHeartLogsInput
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
}

input HeartLogUpdateWithoutUserDataInput {
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
  heartData: HeartDataUpdateManyWithoutHeartLogInput
}

input HeartLogUpdateWithWhereUniqueWithoutUserInput {
  where: HeartLogWhereUniqueInput!
  data: HeartLogUpdateWithoutUserDataInput!
}

input HeartLogUpsertWithoutHeartDataInput {
  update: HeartLogUpdateWithoutHeartDataDataInput!
  create: HeartLogCreateWithoutHeartDataInput!
}

input HeartLogUpsertWithWhereUniqueWithoutUserInput {
  where: HeartLogWhereUniqueInput!
  update: HeartLogUpdateWithoutUserDataInput!
  create: HeartLogCreateWithoutUserInput!
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
  user: UserWhereInput
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
  heartData_every: HeartDataWhereInput
  heartData_some: HeartDataWhereInput
  heartData_none: HeartDataWhereInput
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
  user: User!
  accessToken: String!
  scope: String!
}

type RescueTimeAccountConnection {
  pageInfo: PageInfo!
  edges: [RescueTimeAccountEdge]!
  aggregate: AggregateRescueTimeAccount!
}

input RescueTimeAccountCreateInput {
  user: UserCreateOneWithoutRescueTimeAccountInput!
  accessToken: String!
  scope: String!
}

input RescueTimeAccountCreateOneWithoutUserInput {
  create: RescueTimeAccountCreateWithoutUserInput
  connect: RescueTimeAccountWhereUniqueInput
}

input RescueTimeAccountCreateWithoutUserInput {
  accessToken: String!
  scope: String!
}

type RescueTimeAccountEdge {
  node: RescueTimeAccount!
  cursor: String!
}

enum RescueTimeAccountOrderByInput {
  id_ASC
  id_DESC
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

input RescueTimeAccountUpdateInput {
  user: UserUpdateOneRequiredWithoutRescueTimeAccountInput
  accessToken: String
  scope: String
}

input RescueTimeAccountUpdateOneWithoutUserInput {
  create: RescueTimeAccountCreateWithoutUserInput
  update: RescueTimeAccountUpdateWithoutUserDataInput
  upsert: RescueTimeAccountUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: RescueTimeAccountWhereUniqueInput
}

input RescueTimeAccountUpdateWithoutUserDataInput {
  accessToken: String
  scope: String
}

input RescueTimeAccountUpsertWithoutUserInput {
  update: RescueTimeAccountUpdateWithoutUserDataInput!
  create: RescueTimeAccountCreateWithoutUserInput!
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
  user: UserWhereInput
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
}

type SleepData {
  id: ID!
  sleepLog: SleepLog!
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
  sleepLog: SleepLogCreateOneWithoutSleepDataInput!
  dateTime: DateTime!
  level: String!
  second: Int!
}

input SleepDataCreateManyWithoutSleepLogInput {
  create: [SleepDataCreateWithoutSleepLogInput!]
  connect: [SleepDataWhereUniqueInput!]
}

input SleepDataCreateWithoutSleepLogInput {
  dateTime: DateTime!
  level: String!
  second: Int!
}

type SleepDataEdge {
  node: SleepData!
  cursor: String!
}

enum SleepDataOrderByInput {
  id_ASC
  id_DESC
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

input SleepDataUpdateInput {
  sleepLog: SleepLogUpdateOneRequiredWithoutSleepDataInput
  dateTime: DateTime
  level: String
  second: Int
}

input SleepDataUpdateManyWithoutSleepLogInput {
  create: [SleepDataCreateWithoutSleepLogInput!]
  delete: [SleepDataWhereUniqueInput!]
  connect: [SleepDataWhereUniqueInput!]
  disconnect: [SleepDataWhereUniqueInput!]
  update: [SleepDataUpdateWithWhereUniqueWithoutSleepLogInput!]
  upsert: [SleepDataUpsertWithWhereUniqueWithoutSleepLogInput!]
}

input SleepDataUpdateWithoutSleepLogDataInput {
  dateTime: DateTime
  level: String
  second: Int
}

input SleepDataUpdateWithWhereUniqueWithoutSleepLogInput {
  where: SleepDataWhereUniqueInput!
  data: SleepDataUpdateWithoutSleepLogDataInput!
}

input SleepDataUpsertWithWhereUniqueWithoutSleepLogInput {
  where: SleepDataWhereUniqueInput!
  update: SleepDataUpdateWithoutSleepLogDataInput!
  create: SleepDataCreateWithoutSleepLogInput!
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
  sleepLog: SleepLogWhereInput
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
  user: User!
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
  sleepData(where: SleepDataWhereInput, orderBy: SleepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepData!]
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
  user: UserCreateOneWithoutSleepLogsInput!
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
  sleepData: SleepDataCreateManyWithoutSleepLogInput
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

input SleepLogCreateManyWithoutUserInput {
  create: [SleepLogCreateWithoutUserInput!]
  connect: [SleepLogWhereUniqueInput!]
}

input SleepLogCreateOneWithoutSleepDataInput {
  create: SleepLogCreateWithoutSleepDataInput
  connect: SleepLogWhereUniqueInput
}

input SleepLogCreateWithoutSleepDataInput {
  user: UserCreateOneWithoutSleepLogsInput!
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

input SleepLogCreateWithoutUserInput {
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
  sleepData: SleepDataCreateManyWithoutSleepLogInput
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

type SleepLogEdge {
  node: SleepLog!
  cursor: String!
}

enum SleepLogOrderByInput {
  id_ASC
  id_DESC
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

input SleepLogUpdateInput {
  user: UserUpdateOneRequiredWithoutSleepLogsInput
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
  sleepData: SleepDataUpdateManyWithoutSleepLogInput
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

input SleepLogUpdateManyWithoutUserInput {
  create: [SleepLogCreateWithoutUserInput!]
  delete: [SleepLogWhereUniqueInput!]
  connect: [SleepLogWhereUniqueInput!]
  disconnect: [SleepLogWhereUniqueInput!]
  update: [SleepLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [SleepLogUpsertWithWhereUniqueWithoutUserInput!]
}

input SleepLogUpdateOneRequiredWithoutSleepDataInput {
  create: SleepLogCreateWithoutSleepDataInput
  update: SleepLogUpdateWithoutSleepDataDataInput
  upsert: SleepLogUpsertWithoutSleepDataInput
  connect: SleepLogWhereUniqueInput
}

input SleepLogUpdateWithoutSleepDataDataInput {
  user: UserUpdateOneRequiredWithoutSleepLogsInput
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

input SleepLogUpdateWithoutUserDataInput {
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
  sleepData: SleepDataUpdateManyWithoutSleepLogInput
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

input SleepLogUpdateWithWhereUniqueWithoutUserInput {
  where: SleepLogWhereUniqueInput!
  data: SleepLogUpdateWithoutUserDataInput!
}

input SleepLogUpsertWithoutSleepDataInput {
  update: SleepLogUpdateWithoutSleepDataDataInput!
  create: SleepLogCreateWithoutSleepDataInput!
}

input SleepLogUpsertWithWhereUniqueWithoutUserInput {
  where: SleepLogWhereUniqueInput!
  update: SleepLogUpdateWithoutUserDataInput!
  create: SleepLogCreateWithoutUserInput!
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
  user: UserWhereInput
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
  sleepData_every: SleepDataWhereInput
  sleepData_some: SleepDataWhereInput
  sleepData_none: SleepDataWhereInput
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
  stepLog: StepLog!
  dateTime: DateTime!
  steps: Int!
}

type StepDataConnection {
  pageInfo: PageInfo!
  edges: [StepDataEdge]!
  aggregate: AggregateStepData!
}

input StepDataCreateInput {
  stepLog: StepLogCreateOneWithoutStepDataInput!
  dateTime: DateTime!
  steps: Int!
}

input StepDataCreateManyWithoutStepLogInput {
  create: [StepDataCreateWithoutStepLogInput!]
  connect: [StepDataWhereUniqueInput!]
}

input StepDataCreateWithoutStepLogInput {
  dateTime: DateTime!
  steps: Int!
}

type StepDataEdge {
  node: StepData!
  cursor: String!
}

enum StepDataOrderByInput {
  id_ASC
  id_DESC
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

input StepDataUpdateInput {
  stepLog: StepLogUpdateOneRequiredWithoutStepDataInput
  dateTime: DateTime
  steps: Int
}

input StepDataUpdateManyWithoutStepLogInput {
  create: [StepDataCreateWithoutStepLogInput!]
  delete: [StepDataWhereUniqueInput!]
  connect: [StepDataWhereUniqueInput!]
  disconnect: [StepDataWhereUniqueInput!]
  update: [StepDataUpdateWithWhereUniqueWithoutStepLogInput!]
  upsert: [StepDataUpsertWithWhereUniqueWithoutStepLogInput!]
}

input StepDataUpdateWithoutStepLogDataInput {
  dateTime: DateTime
  steps: Int
}

input StepDataUpdateWithWhereUniqueWithoutStepLogInput {
  where: StepDataWhereUniqueInput!
  data: StepDataUpdateWithoutStepLogDataInput!
}

input StepDataUpsertWithWhereUniqueWithoutStepLogInput {
  where: StepDataWhereUniqueInput!
  update: StepDataUpdateWithoutStepLogDataInput!
  create: StepDataCreateWithoutStepLogInput!
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
  stepLog: StepLogWhereInput
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
  user: User!
  date: DateTime!
  totalSteps: Int!
  stepData(where: StepDataWhereInput, orderBy: StepDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StepData!]
}

type StepLogConnection {
  pageInfo: PageInfo!
  edges: [StepLogEdge]!
  aggregate: AggregateStepLog!
}

input StepLogCreateInput {
  user: UserCreateOneWithoutStepLogsInput!
  date: DateTime!
  totalSteps: Int!
  stepData: StepDataCreateManyWithoutStepLogInput
}

input StepLogCreateManyWithoutUserInput {
  create: [StepLogCreateWithoutUserInput!]
  connect: [StepLogWhereUniqueInput!]
}

input StepLogCreateOneWithoutStepDataInput {
  create: StepLogCreateWithoutStepDataInput
  connect: StepLogWhereUniqueInput
}

input StepLogCreateWithoutStepDataInput {
  user: UserCreateOneWithoutStepLogsInput!
  date: DateTime!
  totalSteps: Int!
}

input StepLogCreateWithoutUserInput {
  date: DateTime!
  totalSteps: Int!
  stepData: StepDataCreateManyWithoutStepLogInput
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
  user: UserUpdateOneRequiredWithoutStepLogsInput
  date: DateTime
  totalSteps: Int
  stepData: StepDataUpdateManyWithoutStepLogInput
}

input StepLogUpdateManyWithoutUserInput {
  create: [StepLogCreateWithoutUserInput!]
  delete: [StepLogWhereUniqueInput!]
  connect: [StepLogWhereUniqueInput!]
  disconnect: [StepLogWhereUniqueInput!]
  update: [StepLogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [StepLogUpsertWithWhereUniqueWithoutUserInput!]
}

input StepLogUpdateOneRequiredWithoutStepDataInput {
  create: StepLogCreateWithoutStepDataInput
  update: StepLogUpdateWithoutStepDataDataInput
  upsert: StepLogUpsertWithoutStepDataInput
  connect: StepLogWhereUniqueInput
}

input StepLogUpdateWithoutStepDataDataInput {
  user: UserUpdateOneRequiredWithoutStepLogsInput
  date: DateTime
  totalSteps: Int
}

input StepLogUpdateWithoutUserDataInput {
  date: DateTime
  totalSteps: Int
  stepData: StepDataUpdateManyWithoutStepLogInput
}

input StepLogUpdateWithWhereUniqueWithoutUserInput {
  where: StepLogWhereUniqueInput!
  data: StepLogUpdateWithoutUserDataInput!
}

input StepLogUpsertWithoutStepDataInput {
  update: StepLogUpdateWithoutStepDataDataInput!
  create: StepLogCreateWithoutStepDataInput!
}

input StepLogUpsertWithWhereUniqueWithoutUserInput {
  where: StepLogWhereUniqueInput!
  update: StepLogUpdateWithoutUserDataInput!
  create: StepLogCreateWithoutUserInput!
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
  user: UserWhereInput
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
  stepData_every: StepDataWhereInput
  stepData_some: StepDataWhereInput
  stepData_none: StepDataWhereInput
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
  rescueTimeAccount: RescueTimeAccount
  sleepLogs(where: SleepLogWhereInput, orderBy: SleepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SleepLog!]
  heartLogs(where: HeartLogWhereInput, orderBy: HeartLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HeartLog!]
  stepLogs(where: StepLogWhereInput, orderBy: StepLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StepLog!]
  calorieLogs(where: CalorieLogWhereInput, orderBy: CalorieLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CalorieLog!]
  distanceLogs(where: DistanceLogWhereInput, orderBy: DistanceLogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DistanceLog!]
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
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateOneWithoutCalorieLogsInput {
  create: UserCreateWithoutCalorieLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutDistanceLogsInput {
  create: UserCreateWithoutDistanceLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFitbitAccountInput {
  create: UserCreateWithoutFitbitAccountInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGoogleFitAccountInput {
  create: UserCreateWithoutGoogleFitAccountInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutHeartLogsInput {
  create: UserCreateWithoutHeartLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRescueTimeAccountInput {
  create: UserCreateWithoutRescueTimeAccountInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSleepLogsInput {
  create: UserCreateWithoutSleepLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStepLogsInput {
  create: UserCreateWithoutStepLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCalorieLogsInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutDistanceLogsInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutFitbitAccountInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutGoogleFitAccountInput {
  email: String!
  password: String!
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutHeartLogsInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutRescueTimeAccountInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutSleepLogsInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  stepLogs: StepLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserCreateWithoutStepLogsInput {
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccountCreateOneWithoutUserInput
  fitbitAccount: FitbitAccountCreateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountCreateOneWithoutUserInput
  sleepLogs: SleepLogCreateManyWithoutUserInput
  heartLogs: HeartLogCreateManyWithoutUserInput
  calorieLogs: CalorieLogCreateManyWithoutUserInput
  distanceLogs: DistanceLogCreateManyWithoutUserInput
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
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateOneRequiredWithoutCalorieLogsInput {
  create: UserCreateWithoutCalorieLogsInput
  update: UserUpdateWithoutCalorieLogsDataInput
  upsert: UserUpsertWithoutCalorieLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutDistanceLogsInput {
  create: UserCreateWithoutDistanceLogsInput
  update: UserUpdateWithoutDistanceLogsDataInput
  upsert: UserUpsertWithoutDistanceLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutFitbitAccountInput {
  create: UserCreateWithoutFitbitAccountInput
  update: UserUpdateWithoutFitbitAccountDataInput
  upsert: UserUpsertWithoutFitbitAccountInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutGoogleFitAccountInput {
  create: UserCreateWithoutGoogleFitAccountInput
  update: UserUpdateWithoutGoogleFitAccountDataInput
  upsert: UserUpsertWithoutGoogleFitAccountInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutHeartLogsInput {
  create: UserCreateWithoutHeartLogsInput
  update: UserUpdateWithoutHeartLogsDataInput
  upsert: UserUpsertWithoutHeartLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRescueTimeAccountInput {
  create: UserCreateWithoutRescueTimeAccountInput
  update: UserUpdateWithoutRescueTimeAccountDataInput
  upsert: UserUpsertWithoutRescueTimeAccountInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutSleepLogsInput {
  create: UserCreateWithoutSleepLogsInput
  update: UserUpdateWithoutSleepLogsDataInput
  upsert: UserUpsertWithoutSleepLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutStepLogsInput {
  create: UserCreateWithoutStepLogsInput
  update: UserUpdateWithoutStepLogsDataInput
  upsert: UserUpsertWithoutStepLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCalorieLogsDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutDistanceLogsDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutFitbitAccountDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutGoogleFitAccountDataInput {
  email: String
  password: String
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutHeartLogsDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutRescueTimeAccountDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutSleepLogsDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  stepLogs: StepLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpdateWithoutStepLogsDataInput {
  email: String
  password: String
  googleFitAccount: GoogleFitAccountUpdateOneWithoutUserInput
  fitbitAccount: FitbitAccountUpdateOneWithoutUserInput
  rescueTimeAccount: RescueTimeAccountUpdateOneWithoutUserInput
  sleepLogs: SleepLogUpdateManyWithoutUserInput
  heartLogs: HeartLogUpdateManyWithoutUserInput
  calorieLogs: CalorieLogUpdateManyWithoutUserInput
  distanceLogs: DistanceLogUpdateManyWithoutUserInput
  sleepLogLastUpdatedDate: DateTime
  productivityLogLastUpdatedDate: DateTime
}

input UserUpsertWithoutCalorieLogsInput {
  update: UserUpdateWithoutCalorieLogsDataInput!
  create: UserCreateWithoutCalorieLogsInput!
}

input UserUpsertWithoutDistanceLogsInput {
  update: UserUpdateWithoutDistanceLogsDataInput!
  create: UserCreateWithoutDistanceLogsInput!
}

input UserUpsertWithoutFitbitAccountInput {
  update: UserUpdateWithoutFitbitAccountDataInput!
  create: UserCreateWithoutFitbitAccountInput!
}

input UserUpsertWithoutGoogleFitAccountInput {
  update: UserUpdateWithoutGoogleFitAccountDataInput!
  create: UserCreateWithoutGoogleFitAccountInput!
}

input UserUpsertWithoutHeartLogsInput {
  update: UserUpdateWithoutHeartLogsDataInput!
  create: UserCreateWithoutHeartLogsInput!
}

input UserUpsertWithoutRescueTimeAccountInput {
  update: UserUpdateWithoutRescueTimeAccountDataInput!
  create: UserCreateWithoutRescueTimeAccountInput!
}

input UserUpsertWithoutSleepLogsInput {
  update: UserUpdateWithoutSleepLogsDataInput!
  create: UserCreateWithoutSleepLogsInput!
}

input UserUpsertWithoutStepLogsInput {
  update: UserUpdateWithoutStepLogsDataInput!
  create: UserCreateWithoutStepLogsInput!
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
  rescueTimeAccount: RescueTimeAccountWhereInput
  sleepLogs_every: SleepLogWhereInput
  sleepLogs_some: SleepLogWhereInput
  sleepLogs_none: SleepLogWhereInput
  heartLogs_every: HeartLogWhereInput
  heartLogs_some: HeartLogWhereInput
  heartLogs_none: HeartLogWhereInput
  stepLogs_every: StepLogWhereInput
  stepLogs_some: StepLogWhereInput
  stepLogs_none: StepLogWhereInput
  calorieLogs_every: CalorieLogWhereInput
  calorieLogs_some: CalorieLogWhereInput
  calorieLogs_none: CalorieLogWhereInput
  distanceLogs_every: DistanceLogWhereInput
  distanceLogs_some: DistanceLogWhereInput
  distanceLogs_none: DistanceLogWhereInput
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