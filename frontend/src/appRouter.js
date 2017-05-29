import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from './app';
import settings from './config';
import { Login, Error404, OldDashboard } from './components';
import {
  isUserLoggedIn,
} from './utils';


class AppRouter extends Component{

  requireAuth(nextState, replace) {
    if (!isUserLoggedIn()) {
      replace({
        pathname: settings.uiUrls.LOGIN_URL,
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  isAuthenticated(nextState, replace) {
    if (isUserLoggedIn()) {
      replace ({
        pathname: settings.uiUrls.DASHBOARD_URL,
        state: {nextPathname: nextState.location.pathname}
      });
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path={settings.uiUrls.LOGIN_URL} component={Login} onEnter={this.isAuthenticated}/>
        <Route path={settings.uiUrls.DASHBOARD_URL} component={App} onEnter={this.requireAuth}/>
        <Route path={settings.uiUrls.OLD_DASHBOARD_URL} component={OldDashboard}/>
        <Route path="*" component={Error404}/>
      </Router>
    );
  }
}

export default AppRouter;
