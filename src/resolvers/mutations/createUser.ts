import { IContext } from '../../types';

export const createUser = (
  parent: any,
  args: any,
  ctx: IContext,
  info: any
) => {
  return ctx.db.mutation.createUser({
    data: {
      username: args.username
    }
  });
};
