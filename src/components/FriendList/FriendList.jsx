import { Component } from 'react';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

class FriendList extends Component {
  friendItem(friends) {
    return friends.map(({ avatar, name, isOnline, id }) => (
      <Item key={id} className="friend-list-item">
        <Status
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </Item>
    ));
  }

  render() {
    const { friends } = this.props;
    return <List>{this.friendItem(friends)}</List>;
  }
}

export default FriendList;
