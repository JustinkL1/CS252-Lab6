import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';

import LandingPage from './pages/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import HomePage from './pages/Home';
import Navigation from './components/Navigation';
class App extends React.Component {
  render() {
    return (
      
      <Router>
      <div>
        <Navigation/>
        <hr/>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route exact path={routes.SIGN_IN} component={SignInPage} />
        <Route exact path={routes.HOME} component={HomePage} />

      </div>
    </Router>

    );
  }
}

export default withAuthentication(App);
