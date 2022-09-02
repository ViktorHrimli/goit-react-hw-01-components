import PropTypes from 'prop-types';
import { CommonStyleParagraph } from 'components/commonStyle/Common.styled';
export const UserInfo = ({ text }) => {
  return <CommonStyleParagraph>{text}</CommonStyleParagraph>;
};

UserInfo.propTypes = {
  text: PropTypes.string.isRequired,
};
