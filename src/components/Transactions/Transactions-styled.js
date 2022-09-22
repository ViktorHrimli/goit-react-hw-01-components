import styled from 'styled-components';

export const Table = styled.table`
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.md};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.space[5] - 10}px;
  background: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  background: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
`;

export const TableRow = styled.tr`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.space[5] - 10}px;
`;
export const Tableth = styled.th`
  color: ${p => p.theme.colors.white};
`;

export const Tbody = styled.tbody``;
