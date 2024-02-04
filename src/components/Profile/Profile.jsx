import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>&#64;{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>
            {capitalize(Object.keys(stats)[0])}
          </span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>
            {capitalize(Object.keys(stats)[1])}
          </span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>
            {capitalize(Object.keys(stats)[2])}
          </span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export { Profile };
