import {
  StatList,
  StatisticsSection,
  Title,
  StatisticItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>{statisticsMarkup(data)}</StatList>
    </StatisticsSection>
  );
};

const statisticsMarkup = data => {
  return uniqueLabels(data).map(([label, percentage]) => (
    <StatisticItem key={label} style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </StatisticItem>
  ));
};

const uniqueLabels = stats => {
  return Object.entries(
    stats.reduce((uniqueLabels, stat) => {
      const isLabelDuplicate = uniqueLabels.hasOwnProperty(stat.label);

      if (!isLabelDuplicate) {
        uniqueLabels[stat.label] = stat.percentage; // adds item to the object {label: value}
      } else {
        uniqueLabels[stat.label] += stat.percentage; //if such item is already in the list -> it's value added
      }

      return uniqueLabels; // returns an object {uniqueLabels: values}
    }, {})
  );
};

export { Statistics };
