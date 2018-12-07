const post = async (_, args, ctx) => {
  const post = await ctx.models.post.findById(args.input.id).exec();

  if (!post) {
    throw new Error('Post does not exist');
  }

  return post;
};

const posts = (_, __, ctx) => {
  return ctx.models.post.find({}).exec();
};

const newPost = (_, args, ctx) => {
  return ctx.models.post.create(args.input);
};

const updatePost = (_, args, ctx) => {
  const { id, ...rest } = args.input;
  return ctx.models.post.findByIdAndUpdate({ _id: id }, { ...rest }).exec();
};

export default {
  Query: {
    post,
    posts
  },
  Mutation: {
    newPost,
    updatePost
  },
  Post: {
    id(post) {
      return post._id + '';
    },
    author(post, args, ctx) {
      return ctx.models.user.findById(post.author).exec();
    }
  }
};
