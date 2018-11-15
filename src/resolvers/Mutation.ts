import { APP_SECRET, getUserId } from '../utils';
import { compare, hash } from 'bcrypt';
import { MutationResolvers } from '../generated/graphqlgen';
import { sign } from 'jsonwebtoken';

export const Mutation: MutationResolvers.Type = {
  signup: async (_parent, { password, email }, ctx) => {
    const hashedPassword = await hash(password, 10);
    const user = await ctx.db.createUser({
      email,
      password: hashedPassword
    });

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  login: async (_parent, { email, password }, ctx) => {
    const user = await ctx.db.user({ email });

    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  }
};
