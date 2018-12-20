import { APP_SECRET, getUserId } from '../utils';
import { compare, hash } from 'bcrypt';
import { getAccessToken } from '../api/rescuetime/signup';
import { getAllUpdatedProductivityData } from '../api/rescuetime/productivity';
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
  refreshSleepLogs: async (_parent, { userId }, ctx) => {
    const result = await getAllUpdatedSleepLogs(userId);
    if (result != undefined) {
      return result.toString();
    }
    return "Error";
  },

  deleteAllSleepLogs: async (_parent, { userId }, ctx) => {
    // https://github.com/prisma/prisma/issues/1936 cannot do a deleteMany because it doesn't support cascading deletes
    // await ctx.db.deleteManySleepLogs({ user: { id: userId } }).catch(error => {
    //   console.log(error);
    // });
    const sleepLogs = await ctx.db.user({ id: userId }).sleepLogs();
    sleepLogs.forEach(sleepLog => {
      ctx.db.deleteSleepLog({ id: sleepLog.id }).catch(error => {
        throw new Error(error);
      });
    });
    await ctx.db.updateUser({
      where: { id: userId },
      data: { sleepLogLastUpdatedDate: "2007-03-26T00:00:00" }
    });
    return sleepLogs.length.toString();
  },
  refreshProductivityData: async (_parent, { userId }, ctx) => {
    const result = await getAllUpdatedProductivityData(userId);
    if (result != undefined) {
      return result.toString();
    }
    return "Error";
  },
  deleteAllProductivityData: async (_parent, { userId }, ctx) => {
    const count = await ctx.db
      .deleteManyProductivityDatas({ user: { id: userId } })
      .count();
    await ctx.db.updateUser({
      where: { id: userId },
      data: { productivityDataLastUpdatedDate: "2009-01-01T00:00:00" }
    });
    return count;
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
