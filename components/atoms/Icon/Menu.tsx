import { Color } from '@styles/index';
import React, { memo } from 'react';
import { IIconProps } from '.';

const Icon: (props: IIconProps) => JSX.Element = ({
  fill = Color.Black,
  style = {},
  clickDispatcher = () => {},
  ...attrs
}) => {
  return (
    <svg
      onClick={clickDispatcher}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15"
      fill="none"
      viewBox="0 0 18 15"
    >
      <path fill={fill} fillRule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm18 6H0v3h18v-3z" clipRule="evenodd"></path>
    </svg>
  );
};

export default memo(Icon);
