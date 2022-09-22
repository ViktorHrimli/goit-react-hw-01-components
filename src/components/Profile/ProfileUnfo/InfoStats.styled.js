import styled from 'styled-components';

export const InfoStatsStyle = styled.li`
  font-size: ${p => p.theme.fontSizes.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  row-gap: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;
