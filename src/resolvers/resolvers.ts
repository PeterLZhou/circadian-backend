import { createUser } from './mutations/createUser';
import { queries } from './query';
export default {
  Query: queries,
  Mutation: {
    createUser
  }
};
