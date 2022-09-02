import PropTypes from 'prop-types';
import { InfoStatsStyle } from './InfoStats.styled';
import { CommonStyleSpan } from 'components/commonStyle/Common.styled';
export const InfoStats = ({ text, quantity }) => {
  return (
    <InfoStatsStyle>
      <CommonStyleSpan>{text}</CommonStyleSpan>
      <CommonStyleSpan>{quantity}</CommonStyleSpan>
    </InfoStatsStyle>
  );
};

InfoStats.propTypes = {
  text: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
