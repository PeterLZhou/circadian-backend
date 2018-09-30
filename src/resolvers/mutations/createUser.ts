import bcrypt from "bcryptjs";
import { IContext } from "../../types";

export const createUser = async (
  parent: any,
  args: any,
  ctx: IContext,
  info: any
) => {
  const password: string = await bcrypt.hash(args.password, 10);
  return await ctx.db.mutation.createUser({
    data: {
      email: args.email,
      password
    }
  });
};
