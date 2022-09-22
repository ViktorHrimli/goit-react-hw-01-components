import styled from 'styled-components';
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
  width: ${p => p.theme.space[8] * 2}px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[5]}px;
  background: ${p => p.theme.colors.background};
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.lg};
`;

export const CommonStyleParagraph = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
`;

export const CommonStyleSpan = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  row-gap: ${p => p.theme.space[4]}px;
  column-gap: ${p => p.theme.space[4]}px;
`;

export const CommonStylePicture = styled.img`
  border-radius: ${p => p.theme.radii.round};
`;
