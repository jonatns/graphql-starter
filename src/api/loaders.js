import DataLoader from 'dataloader';

import User from './user/user.model';
import keyBy from 'lodash.keyby';

const createUserLoader = () =>
  new DataLoader(userIds => {
    return User.find({ _id: { $in: userIds } })
      .exec()
      .then(users => {
        const usersById = keyBy(users, '_id');
        return usersById.map(userId => usersById[userId]);
      });
  });

export default () => ({
  user: createUserLoader()
});
