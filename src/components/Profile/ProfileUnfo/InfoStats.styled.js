import styled from '@emotion/styled';
import { theme } from 'components/commonStyle/Thema';

export const InfoStatsStyle = styled.li`
  font-size: ${theme.fontSizes.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${`${theme.space[3]}px`};
  row-gap: ${`${theme.space[3]}px`};
  margin-left: ${`${theme.space[3]}px`};
`;
