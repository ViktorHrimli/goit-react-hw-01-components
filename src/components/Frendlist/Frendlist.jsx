import PropTypes from 'prop-types';
import { CommonStyleDiv } from 'components/commonStyle/Common.styled';
import { StyleFrendList } from './Frendlist-styled.js';
import { RenderItemFriend } from './Frendlist-Render/render--list';
export function Frendlist({ data }) {
  return (
    <CommonStyleDiv>
      <StyleFrendList>{RenderItemFriend(data)}</StyleFrendList>
    </CommonStyleDiv>
  );
}

Frendlist.prototype = {
  data: PropTypes.array.isRequired,
};
