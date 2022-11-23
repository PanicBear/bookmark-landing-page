import { Icon } from '@components/atoms';
import React from 'react';

interface IHeaderProps {}

const Header: (props: IHeaderProps) => JSX.Element = ({}) => {
  return (
    <div>
      <Icon.Menu />
    </div>
  );
};

export default Header;
