<<<<<<< HEAD
import { IContext } from '../../types';

export const createUser = (
=======
import bcrypt from "bcryptjs";
import { IContext } from "../../types";

export const createUser = async (
>>>>>>> f6afa5c8ec78c243715f1eb07d72752e549a2127
  parent: any,
  args: any,
  ctx: IContext,
  info: any
) => {
<<<<<<< HEAD
  return ctx.db.mutation.createUser({
    data: {
      username: args.username
=======
  const password: string = await bcrypt.hash(args.password, 10);
  return await ctx.db.mutation.createUser({
    data: {
      email: args.email,
      password
>>>>>>> f6afa5c8ec78c243715f1eb07d72752e549a2127
    }
  });
};
