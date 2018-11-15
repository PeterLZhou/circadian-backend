export const typeDefs = /* GraphQL */ `type AggregateGoogleFitAccessToken {
  count: Int!
}

type AggregateGoogleFitAccount {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type GoogleFitAccessToken {
  id: ID!
  account_id: ID!
  value: String!
  expiration: DateTime!
}

type GoogleFitAccessTokenConnection {
  pageInfo: PageInfo!
  edges: [GoogleFitAccessTokenEdge]!
  aggregate: AggregateGoogleFitAccessToken!
}

input GoogleFitAccessTokenCreateInput {
  account_id: ID!
  value: String!
  expiration: DateTime!
}

input GoogleFitAccessTokenCreateOneInput {
  create: GoogleFitAccessTokenCreateInput
  connect: GoogleFitAccessTokenWhereUniqueInput
}

type GoogleFitAccessTokenEdge {
  node: GoogleFitAccessToken!
  cursor: String!
}

enum GoogleFitAccessTokenOrderByInput {
  id_ASC
  id_DESC
  account_id_ASC
  account_id_DESC
  value_ASC
  value_DESC
  expiration_ASC
  expiration_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GoogleFitAccessTokenPreviousValues {
  id: ID!
  account_id: ID!
  value: String!
  expiration: DateTime!
}

type GoogleFitAccessTokenSubscriptionPayload {
  mutation: MutationType!
  node: GoogleFitAccessToken
  updatedFields: [String!]
  previousValues: GoogleFitAccessTokenPreviousValues
}

input GoogleFitAccessTokenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GoogleFitAccessTokenWhereInput
  AND: [GoogleFitAccessTokenSubscriptionWhereInput!]
  OR: [GoogleFitAccessTokenSubscriptionWhereInput!]
  NOT: [GoogleFitAccessTokenSubscriptionWhereInput!]
}

input GoogleFitAccessTokenUpdateDataInput {
  account_id: ID
  value: String
  expiration: DateTime
}

input GoogleFitAccessTokenUpdateInput {
  account_id: ID
  value: String
  expiration: DateTime
}

input GoogleFitAccessTokenUpdateOneRequiredInput {
  create: GoogleFitAccessTokenCreateInput
  update: GoogleFitAccessTokenUpdateDataInput
  upsert: GoogleFitAccessTokenUpsertNestedInput
  connect: GoogleFitAccessTokenWhereUniqueInput
}

input GoogleFitAccessTokenUpsertNestedInput {
  update: GoogleFitAccessTokenUpdateDataInput!
  create: GoogleFitAccessTokenCreateInput!
}

input GoogleFitAccessTokenWhereInput {
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
  account_id: ID
  account_id_not: ID
  account_id_in: [ID!]
  account_id_not_in: [ID!]
  account_id_lt: ID
  account_id_lte: ID
  account_id_gt: ID
  account_id_gte: ID
  account_id_contains: ID
  account_id_not_contains: ID
  account_id_starts_with: ID
  account_id_not_starts_with: ID
  account_id_ends_with: ID
  account_id_not_ends_with: ID
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  expiration: DateTime
  expiration_not: DateTime
  expiration_in: [DateTime!]
  expiration_not_in: [DateTime!]
  expiration_lt: DateTime
  expiration_lte: DateTime
  expiration_gt: DateTime
  expiration_gte: DateTime
  AND: [GoogleFitAccessTokenWhereInput!]
  OR: [GoogleFitAccessTokenWhereInput!]
  NOT: [GoogleFitAccessTokenWhereInput!]
}

input GoogleFitAccessTokenWhereUniqueInput {
  id: ID
}

type GoogleFitAccount {
  id: ID!
  refreshToken: String!
  accessToken: GoogleFitAccessToken!
}

type GoogleFitAccountConnection {
  pageInfo: PageInfo!
  edges: [GoogleFitAccountEdge]!
  aggregate: AggregateGoogleFitAccount!
}

input GoogleFitAccountCreateInput {
  refreshToken: String!
  accessToken: GoogleFitAccessTokenCreateOneInput!
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
  refreshToken_ASC
  refreshToken_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GoogleFitAccountPreviousValues {
  id: ID!
  refreshToken: String!
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
  refreshToken: String
  accessToken: GoogleFitAccessTokenUpdateOneRequiredInput
}

input GoogleFitAccountUpdateInput {
  refreshToken: String
  accessToken: GoogleFitAccessTokenUpdateOneRequiredInput
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
  accessToken: GoogleFitAccessTokenWhereInput
  AND: [GoogleFitAccountWhereInput!]
  OR: [GoogleFitAccountWhereInput!]
  NOT: [GoogleFitAccountWhereInput!]
}

input GoogleFitAccountWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGoogleFitAccessToken(data: GoogleFitAccessTokenCreateInput!): GoogleFitAccessToken!
  updateGoogleFitAccessToken(data: GoogleFitAccessTokenUpdateInput!, where: GoogleFitAccessTokenWhereUniqueInput!): GoogleFitAccessToken
  updateManyGoogleFitAccessTokens(data: GoogleFitAccessTokenUpdateInput!, where: GoogleFitAccessTokenWhereInput): BatchPayload!
  upsertGoogleFitAccessToken(where: GoogleFitAccessTokenWhereUniqueInput!, create: GoogleFitAccessTokenCreateInput!, update: GoogleFitAccessTokenUpdateInput!): GoogleFitAccessToken!
  deleteGoogleFitAccessToken(where: GoogleFitAccessTokenWhereUniqueInput!): GoogleFitAccessToken
  deleteManyGoogleFitAccessTokens(where: GoogleFitAccessTokenWhereInput): BatchPayload!
  createGoogleFitAccount(data: GoogleFitAccountCreateInput!): GoogleFitAccount!
  updateGoogleFitAccount(data: GoogleFitAccountUpdateInput!, where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  updateManyGoogleFitAccounts(data: GoogleFitAccountUpdateInput!, where: GoogleFitAccountWhereInput): BatchPayload!
  upsertGoogleFitAccount(where: GoogleFitAccountWhereUniqueInput!, create: GoogleFitAccountCreateInput!, update: GoogleFitAccountUpdateInput!): GoogleFitAccount!
  deleteGoogleFitAccount(where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  deleteManyGoogleFitAccounts(where: GoogleFitAccountWhereInput): BatchPayload!
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
  googleFitAccessToken(where: GoogleFitAccessTokenWhereUniqueInput!): GoogleFitAccessToken
  googleFitAccessTokens(where: GoogleFitAccessTokenWhereInput, orderBy: GoogleFitAccessTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GoogleFitAccessToken]!
  googleFitAccessTokensConnection(where: GoogleFitAccessTokenWhereInput, orderBy: GoogleFitAccessTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GoogleFitAccessTokenConnection!
  googleFitAccount(where: GoogleFitAccountWhereUniqueInput!): GoogleFitAccount
  googleFitAccounts(where: GoogleFitAccountWhereInput, orderBy: GoogleFitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GoogleFitAccount]!
  googleFitAccountsConnection(where: GoogleFitAccountWhereInput, orderBy: GoogleFitAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GoogleFitAccountConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  googleFitAccessToken(where: GoogleFitAccessTokenSubscriptionWhereInput): GoogleFitAccessTokenSubscriptionPayload
  googleFitAccount(where: GoogleFitAccountSubscriptionWhereInput): GoogleFitAccountSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  googleFitAccount: GoogleFitAccount
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