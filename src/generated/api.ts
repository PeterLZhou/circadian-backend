import { Binding as BaseBinding, BindingOptions } from 'graphql-binding';
import { GraphQLResolveInfo } from 'graphql';

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface Workout extends Node {
  id: ID_Output;
  user?: User;
  description?: String;
}

export interface User extends Node {
  id: ID_Output;
  username: String;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export interface Schema {
  query: Query;
  mutation: Mutation;
}

export type Query = {
  user: (
    args: { id: ID_Output },
    context: { [key: string]: any },
    info?: GraphQLResolveInfo | string
  ) => Promise<User | null>;
  users: (
    args: {},
    context: { [key: string]: any },
    info?: GraphQLResolveInfo | string
  ) => Promise<User[] | null>;
};

export type Mutation = {
  createUser: (
    args: { username: String },
    context: { [key: string]: any },
    info?: GraphQLResolveInfo | string
  ) => Promise<User>;
};

export class Binding extends BaseBinding {
  constructor({ schema, fragmentReplacements }: BindingOptions) {
    super({ schema, fragmentReplacements });
  }

  query: Query = {
    user: (args, context, info): Promise<User | null> =>
      super.delegate("query", "user", args, context, info),
    users: (args, context, info): Promise<User[] | null> =>
      super.delegate("query", "users", args, context, info)
  };

  mutation: Mutation = {
    createUser: (args, context, info): Promise<User> =>
      super.delegate("mutation", "createUser", args, context, info)
  };
}
