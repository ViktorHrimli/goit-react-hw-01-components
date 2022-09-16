import PropTypes from 'prop-types';
import { CommonStyleDiv } from 'components/commonStyle/Common.styled';
import { StyleFrendList } from './Frendlist-styled.js';
import { RenderItemFriend } from './Frendlist-Render/render--list';
import {
  FriendSpanIsOffline,
  FriendSpanIsOnline,
} from '../Frendlist/Frendlist-Render/render--list-styled';
export function Frendlist({ data }) {
  return (
    <CommonStyleDiv>
      <StyleFrendList>{RenderItemFriend(data)}</StyleFrendList>
    </CommonStyleDiv>
  );
}

export function ISOnline(bull) {
  if (bull) return <FriendSpanIsOffline></FriendSpanIsOffline>;
  return <FriendSpanIsOnline></FriendSpanIsOnline>;
}

Frendlist.prototype = {
  data: PropTypes.array.isRequired,
};

ISOnline.prototype = {
  bull: PropTypes.bool.isRequired,
};
