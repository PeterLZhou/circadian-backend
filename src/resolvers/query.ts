import { getUserId } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  me: (parent, args, ctx) => {
    return null; //ctx.db.user({ id: getUserId(ctx) });
  },
  fitbitAccounts: (parent, args, ctx) => {
    console.log("WHAT");
    return []; //ctx.db.fitbitAccounts();
  },
  sleepDatas: (parent, args, ctx) => {
    console.log("WHAT");
    return []; //ctx.db.sleepDatas();
  }
};
