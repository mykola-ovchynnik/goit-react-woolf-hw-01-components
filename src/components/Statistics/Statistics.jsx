import { StatList, StatisticsSection, Title } from './Statistics.styled';

import StatisticsItem from 'components/StatisticsItem/StatisticsItem';

const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {data.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;
