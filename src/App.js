import React from 'react';

import HeaderNav from './containers/HeaderNav/HeaderNav'
import { Home } from './containers/Home/Home';


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HeaderNav />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;