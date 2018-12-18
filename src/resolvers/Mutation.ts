import { APP_SECRET, getUserId } from '../utils';
import { compare, hash } from 'bcrypt';
import { getAccessToken } from '../api/rescuetime/signup';
import { getAllUpdatedSleepLogs, getSleepLogs } from '../api/fitbit/sleep';
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
  },
  getSleepLogs: async (_parent, { userId }, ctx) => {
    const result = await getAllUpdatedSleepLogs(userId);
    return "OK";
  },

  deleteAllSleepLogs: async (_parent, { userId }, ctx) => {
    await ctx.db.deleteManySleepLogs({ user: { id: userId } }).catch(error => {
      console.log(error);
    });
    await ctx.db.updateUser({
      where: { id: userId },
      data: { sleepLogLastUpdatedDate: "2007-03-26T00:00:00" }
    });
    return "OK";
  },
  deleteUser: async (_parent, { userId }, ctx) => {
    let user = await ctx.db.deleteUser({ id: userId }).catch(error => {
      console.log(error);
    });

    return user || null;
  },
  createRescueTimeAccount: async (_parent, { userId, oneTimeCode }, ctx) => {
    const payload = await getAccessToken(oneTimeCode);
    const rescueTimeAccount = await ctx.db
      .user({ id: userId })
      .rescueTimeAccount();
    if (payload && rescueTimeAccount) {
      return ctx.db.updateRescueTimeAccount({
        where: {
          id: rescueTimeAccount.id
        },
        data: {
          accessToken: payload.access_token,
          scope: payload.scope
        }
      });
    } else if (payload) {
      return ctx.db.createRescueTimeAccount({
        user: {
          connect: {
            id: userId
          }
        },
        accessToken: payload.access_token,
        scope: payload.scope
      });
    }

    throw new Error("Could not get access token");
  },
  deleteFitbitAccount: async (_parent, { id }, ctx) => {
    return await ctx.db.deleteFitbitAccount({ id: id });
  }
};
