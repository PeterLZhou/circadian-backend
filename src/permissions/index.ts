import { and, rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';

const rules = {
  isUser: rule()((_parent, args, ctx) => {
    const userId = getUserId(ctx);

    return !!userId;
  })
};

export const permissions = shield({
  Query: {
    me: rules.isUser
  },
  Mutation: {}
});
