import PropTypes from 'prop-types';
import { StaticList } from './StatInfo/StatList';
import { StatisticStyle } from './Statistic.styled';
import { CommonStyleDiv } from 'components/commonStyle/Common.styled';
import { HeadTitleStatistic } from './Statistic.styled';
export const Statistic = ({ stat, title }) => {
  return (
    <section>
      <CommonStyleDiv>
        {title && <HeadTitleStatistic>{title}</HeadTitleStatistic>}
        <StatisticStyle>
          <StaticList data={stat} />
        </StatisticStyle>
      </CommonStyleDiv>
    </section>
  );
};

Statistic.propTypes = {
  stat: PropTypes.array.isRequired,
  text: PropTypes.string,
};
