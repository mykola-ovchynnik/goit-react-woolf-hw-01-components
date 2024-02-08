import { Avatar, Item, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item className="friend-list-item">
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
