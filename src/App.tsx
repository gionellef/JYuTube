import * as React from 'react';

import AppLayout from './components/AppLayout/AppLayout';
import { Home } from './containers/Home/Home';
import { Watch } from './containers/Watch/Watch';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component<any, any> {
  render () {
    return (
      <AppLayout>
        <Switch>
          <Route path='/watch' component={ Watch } />
          <Route path='/' exact component={ Home } />
        </Switch>
      </AppLayout>
    );
  }
}

export default App;