import { CSSProperties, MouseEventHandler } from 'react';

export interface IIconProps {
  fill?: string;
  style?: CSSProperties;
  clickDispatcher?: MouseEventHandler<SVGElement>;
  [key: string]: any;
}

export { default as Menu } from './Menu';
