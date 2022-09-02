import styled from 'styled-components';
const randomCreateColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const LiStyleOptions = styled.li`
  display: flex;
  width: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;
  margin-left: 10px;
  color: ${randomCreateColor};
  background-color: ${randomCreateColor};
`;
