import styled from 'styled-components';
import { theme } from './Thema';
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';
export const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const CommonStyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${`${theme.space[8] * 2}px`};
  padding: ${`${theme.space[4]}px ${theme.space[4]}px`};
  margin-top: ${`${theme.space[5]}px`};
  background: ${theme.colors.background};
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${theme.radii.lg};
`;

export const CommonStyleParagraph = styled.p`
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.l};
  text-align: center;
`;

export const CommonStyleSpan = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.l};
  row-gap: ${`${theme.space[4]}px`};
  column-gap: ${`${theme.space[4]}px`};
`;

export const CommonStylePicture = styled.img`
  border-radius: ${theme.radii.round};
`;
