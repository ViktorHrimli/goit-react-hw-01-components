import PropTypes from 'prop-types';
import { constants } from 'components/constant/img-size';
import {
  CommonStyleDiv,
  CommonStylePicture,
} from 'components/commonStyle/Common.styled';
import { InfoStats } from './ProfileUnfo/InfoStats';
import { UserInfo } from './UserInfo/UserInfo';
import { StyleUser, ListStyle } from './Profile.styled';

export function Profile({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <CommonStyleDiv>
      <StyleUser>
        <CommonStylePicture
          width={constants.user}
          src={avatar}
          alt={username}
        />
        <UserInfo text={username} />
        <UserInfo text={`@${tag}`} />
        <UserInfo text={location} />
      </StyleUser>
      <ListStyle>
        <InfoStats text="Followers" quantity={followers} />
        <InfoStats text="Views" quantity={views} />
        <InfoStats text="Likes" quantity={likes} />
      </ListStyle>
    </CommonStyleDiv>
  );
}

Profile.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
