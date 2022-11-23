import { css, FlattenSimpleInterpolation } from 'styled-components';
import { TColLayout, TRowLayout } from '.';

const Row: Record<TRowLayout, FlattenSimpleInterpolation> = {
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexRowBetweenCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexRowEvenlyCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `,
};

const Col: Record<TColLayout, FlattenSimpleInterpolation> = {
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const Layout = {
  ...Row,
  ...Col,
};

export default Layout;
