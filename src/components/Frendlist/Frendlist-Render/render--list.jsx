import PropTypes from 'prop-types';
import {
  FriendItemStyle,
  FriendImg,
  FriendParagraph,
  FriendSpan,
} from './render--list-styled';

export function RenderItemFriend(data) {
  return data.map(item => {
    return (
      <FriendItemStyle key={item.id}>
        <FriendSpan prop={item.isOnline}></FriendSpan>
        <FriendImg src={item.avatar} alt={item.name} width="48" />
        <FriendParagraph>{item.name}</FriendParagraph>
      </FriendItemStyle>
    );
  });
}

RenderItemFriend.prototype = {
  data: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
