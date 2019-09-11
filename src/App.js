import React from 'react';

import { AppLayout } from './components/AppLayout/AppLayout';
import { Home } from './containers/Home/Home';


class App extends React.Component {
  render () {
    return (
      <AppLayout>
        <Home />
      </AppLayout>
    );
  }
}

export default App;