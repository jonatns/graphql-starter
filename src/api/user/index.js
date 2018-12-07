import resolvers from './user.resolvers';
import model from './user.model';
import gqlLoader from '../../utils/gqlLoader';

export default {
  typeDefs: gqlLoader('user/user.graphql'),
  resolvers,
  model
};
