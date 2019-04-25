import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';

import LandingPage from './pages/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';

class App extends React.Component {
  render() {
    return (
      
      <Router>
      <div>
        <hr/>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route exact path={routes.SIGN_IN} component={SignInPage} />
      </div>
    </Router>

    );
  }
}

export default withAuthentication(App);
