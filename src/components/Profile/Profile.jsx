import {
  Avatar,
  Description,
  Label,
  ListItem,
  Location,
  Name,
  ProfileWrapper,
  Quantity,
  Stats,
  Tag,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <Name>{username}</Name>
        <Tag>&#64;{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ListItem>
          <Label>{capitalize(Object.keys(stats)[0])}</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>{capitalize(Object.keys(stats)[1])}</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>{capitalize(Object.keys(stats)[2])}</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </Stats>
    </ProfileWrapper>
  );
};

const capitalize = string => {
  return string[0].toUpperCase() + string.slice(1);
};

export default Profile;
