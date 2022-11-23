import { TColLayout } from '@styles/index';
import styled, { css } from 'styled-components';

const SCol = styled.div<{
  layout: TColLayout;
}>`
  ${({ theme, layout }) => css`
    ${theme.Layout[layout]}
  `}
`;

export default SCol;
