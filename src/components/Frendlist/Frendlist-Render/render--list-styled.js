import styled from 'styled-components';

export const FriendItemStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  width: 300px;
  height: 60px;
  border-radiys: 5px;
`;

export const FriendSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const FriendSpanIsOnline = styled.span`
  background-color: green;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const FriendSpanIsOffline = styled.span`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const FriendImg = styled.img`
  border-radius: 50%;
`;

export const FriendParagraph = styled.p``;
