import resolvers from './post.resolvers';
import model from './post.model';
import gqlLoader from '../../utils/gqlLoader';

export default {
  typeDefs: gqlLoader('post/post.graphql'),
  resolvers,
  model
};
