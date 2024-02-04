import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={user.avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{user.username}</p>
        <p className={styles.tag}>&#64;{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>
            {capitalize(Object.keys(user.stats)[0])}
          </span>
          <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>
            {capitalize(Object.keys(user.stats)[1])}
          </span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>
            {capitalize(Object.keys(user.stats)[2])}
          </span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

const capitalize = string => {
  return string[0].toUpperCase() + string.slice(1);
};

export { Profile };
