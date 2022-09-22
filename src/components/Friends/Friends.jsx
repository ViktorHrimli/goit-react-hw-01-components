import PropTypes from 'prop-types';
import { CommonStyleDiv } from 'components/commonStyle/Common.styled';
import { StyleFrendList } from './Friends.styled.js';
import { ItemFriend } from './Friendlist/Friendlist';
export function Friends({ data }) {
  return (
    <CommonStyleDiv>
      <StyleFrendList>{ItemFriend(data)}</StyleFrendList>
    </CommonStyleDiv>
  );
}

Friends.prototype = {
  data: PropTypes.array.isRequired,
};
