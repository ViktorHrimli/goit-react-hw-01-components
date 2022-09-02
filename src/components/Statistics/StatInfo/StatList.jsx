import PropTypes from 'prop-types';
import { CommonStyleSpan } from 'components/commonStyle/Common.styled';
import { LiStyleOptions } from './StatList.styled';

export const StaticList = ({ data }) => {
  return data.map(item => {
    return (
      <LiStyleOptions key={item.id}>
        <CommonStyleSpan>{item.label}</CommonStyleSpan>
        <CommonStyleSpan>{item.percentage}</CommonStyleSpan>
      </LiStyleOptions>
    );
  });
};

StaticList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
