import PropTypes from 'prop-types';
import { StaticList } from './StatInfo/StatList';
import { StatisticStyle } from './Statistic.styled';
import { CommonStyle } from 'components/commonStyle/Common.styled';
import { HeadTitleStatistic } from './Statistic.styled';
export const Statistic = ({ stat, title }) => {
  return (
    <section>
      <CommonStyle>
        {title && <HeadTitleStatistic>{title}</HeadTitleStatistic>}
        <StatisticStyle>
          <StaticList data={stat} />
        </StatisticStyle>
      </CommonStyle>
    </section>
  );
};

Statistic.propTypes = {
  stat: PropTypes.array.isRequired,
  text: PropTypes.string,
};
