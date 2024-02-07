export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className="item" key={label}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
