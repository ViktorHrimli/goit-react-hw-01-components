import { theme } from 'components/commonStyle/Thema';
import styled from 'styled-components';

export const HeadTitleStatistic = styled.h2`
  font-family: ${theme.fonts.monospace};
  font-size: ${`${theme.fontSizes.l}`};
`;

export const StatisticStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
