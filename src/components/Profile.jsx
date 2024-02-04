import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">&#64;{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">{capitalize(Object.keys(stats)[0])}</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">{capitalize(Object.keys(stats)[1])}</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">{capitalize(Object.keys(stats)[2])}</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export { Profile };
