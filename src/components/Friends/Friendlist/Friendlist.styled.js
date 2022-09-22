import styled from 'styled-components';
export const FriendItemStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.space[3]}px;
`;

export const FriendSpan = styled.span`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ prop, theme }) => {
    if (prop) return `${theme.colors.primary}`;
    return `${theme.colors.muted}`;
  }};
`;

export const FriendImg = styled.img`
  border-radius: ${p => p.theme.radii.round};
`;

export const FriendParagraph = styled.p``;
