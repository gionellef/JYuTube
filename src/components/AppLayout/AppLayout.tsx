import * as React from 'react';

import { HeaderNav } from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import './AppLayout.scss'

interface Props {
  children?: import('react').ReactNode,
};

const AppLayout : React.FC<Props> = (props) =>  {
  const { children } = props;
  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav />
        { children }
      </div>
    </ScrollToTop>
  );
}

export default AppLayout;