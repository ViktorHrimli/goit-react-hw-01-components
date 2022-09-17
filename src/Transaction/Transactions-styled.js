import { theme } from 'components/commonStyle/Thema';
import styled from 'styled-components';

export const Table = styled.table`
  justify-content: center;
  align-items: center;
  border-radius: ${`${theme.radii.md}`};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.m};
  line-height: ${`${theme.space[5] - 10}px`};
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
`;

export const TableRow = styled.tr`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.m};
  line-height: ${`${theme.space[5] - 10}px`};
`;
export const Tableth = styled.th`
  color: ${theme.colors.white};
`;

export const Tbody = styled.tbody``;
