import styled from 'styled-components';
import { theme } from '../../commonStyle/Thema';

export const FriendItemStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: ${`${theme.space[3]}px`};
  width: ${`${theme.space[8]}px`};
  height: ${`${theme.space[6]}px`};
  border-radius: ${`${theme.space[3]}px`}; ;
`;

export const FriendSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ prop }) => {
    if (prop) return `${theme.colors.primary}`;
    return `${theme.colors.muted}`;
  }};
`;

export const FriendImg = styled.img`
  border-radius: ${theme.radii.round};
`;

export const FriendParagraph = styled.p``;
