import { Component } from 'react';
import {
  StatList,
  StatisticsSection,
  Title,
  StatisticItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

class Statistics extends Component {
  uniqueLabels(stats) {
    return Object.entries(
      stats.reduce((uniqueLabels, stat) => {
        const isLabelDuplicate = uniqueLabels.hasOwnProperty(stat.label);

        if (!isLabelDuplicate) {
          uniqueLabels[stat.label] = stat.percentage;
        } else {
          uniqueLabels[stat.label] += stat.percentage;
        }

        return uniqueLabels;
      }, {})
    );
  }

  statisticsMarkup(data) {
    return this.uniqueLabels(data).map(([label, percentage]) => (
      <StatisticItem
        key={label}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
      </StatisticItem>
    ));
  }

  render() {
    const { title, data } = this.props;

    return (
      <StatisticsSection>
        {title && <Title>{title}</Title>}
        <StatList>{this.statisticsMarkup(data)}</StatList>
      </StatisticsSection>
    );
  }
}

export { Statistics };
