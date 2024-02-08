const { getRandomHexColor } = require('helpers/getRandomHexColor');
const { StatisticItem, Label, Percentage } = require('./StatisticsItem.styled');

const StatisticsItem = ({ label, percentage, id }) => {
  return (
    <StatisticItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}&#37;</Percentage>
    </StatisticItem>
  );
};
export default StatisticsItem;
