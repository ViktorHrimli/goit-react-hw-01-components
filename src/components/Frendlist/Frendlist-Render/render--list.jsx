import PropTypes from 'prop-types';
import {
  FriendItemStyle,
  FriendImg,
  FriendParagraph,
} from './render--list-styled';
import { ISOnline } from '../Frendlist';

export function RenderItemFriend(data) {
  return data.map(item => {
    return (
      <FriendItemStyle key={item.id}>
        {ISOnline(item.isOnline)}
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
