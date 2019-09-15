import * as React from 'react';

import AppLayout from './components/AppLayout/AppLayout';
import { Home } from './containers/Home/Home';
import { Watch } from './containers/Watch/Watch';
import { Route, Switch } from 'react-router-dom';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';

const API_KEY = 'AIzaSyDiLzOrZe5yYpGoslPMANLrspnkGoJSyPs';

declare global {
  interface Window {
    gapi: any;
  }
}

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

  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    }

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);