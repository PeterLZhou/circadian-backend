import { GoogleFitAccountResolvers } from '../generated/graphqlgen';
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const GoogleFitAccount: GoogleFitAccountResolvers.Type = {
  ...GoogleFitAccountResolvers.defaultResolvers,

  accessToken: (parent, args: any, ctx) => {
    return ctx.db.googleFitAccessToken({ id: args.id });
  }
};
