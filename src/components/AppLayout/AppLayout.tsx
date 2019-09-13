import * as React from 'react';

import { HeaderNav } from '../../containers/HeaderNav/HeaderNav';

import './AppLayout.scss'

interface Props {
  children?: import('react').ReactNode,
};

const AppLayout : React.FC<Props> = (props) =>  {
  const { children } = props;
  return (
    <div className='app-layout'>
      <HeaderNav />
      { children }
    </div>
  );
}

export default AppLayout;