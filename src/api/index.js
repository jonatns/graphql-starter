import merge from 'lodash.merge';

import user from './user';
import post from './post';

import loaders from './loaders';

export default {
  typeDefs: [user.typeDefs, post.typeDefs].join(' '),
  resolvers: merge({}, user.resolvers, post.resolvers),
  context: {
    models: {
      user: user.model,
      post: post.model
    },
    loaders: loaders()
  }
};
