import { GraphQLResolveInfo } from 'graphql';
import { IContext } from '../types';
import { ID_Output, Query } from '../generated/api';

export const queries: any = {
  user: (parent: any, args: any, context: any, info: any) => {
    return context.db.query.user({
      where: {
        id: args.id
      }
    });
  },
  users: (parent: any, args: any, context: any, info: any) => {
    return context.db.query.users();
  }
};
