import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" data={data}></Statistics>
      <FriendList friends={friends}></FriendList>
    </section>
  );
};
