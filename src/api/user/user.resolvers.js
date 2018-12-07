const user = async (_, args, ctx) => {
  const user = await ctx.models.user.findById(args.input.id).exec();

  if (!user) {
    throw new Error('User does not exist');
  }

  return user;
};

const users = (_, __, ctx) => {
  return ctx.models.user.find({}).exec();
};

const newUser = (_, args, ctx) => {
  return ctx.models.user.create(args.input);
};

const updateUser = (_, args, ctx) => {
  const { id, ...rest } = args.input;
  return ctx.models.user.findByIdAndUpdate({ _id: id }, { ...rest }).exec();
};

export default {
  Query: {
    user,
    users
  },
  Mutation: {
    newUser,
    updateUser
  },
  User: {
    id(user) {
      return user._id + '';
    },
    posts(user, args, ctx) {
      return ctx.models.post.find({ author: user.id });
    }
  }
};
