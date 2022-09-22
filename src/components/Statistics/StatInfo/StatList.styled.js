import styled from 'styled-components';
const randomCreateColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const LiStyleOptions = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.space[6] + 20}px;
  row-gap: ${p => p.theme.space[4]}px;
  column-gap: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  color: ${randomCreateColor};
  background-color: ${randomCreateColor};
`;
