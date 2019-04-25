import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';

import LandingPage from './pages/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import HomePage from './pages/Home';
import Navigation from './components/Navigation';

import Forum_Show from './components/Post/Show';
import Forum_Edit from './components/Post/Edit';
import Forum_Create from './components/Post/Create';

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

        <Route path='/Forum_edit/:id' component={Forum_Edit} />
        <Route path='/Forum_create' component={Forum_Create} />
        <Route path='/Forum_show/:id' component={Forum_Show} />
      </div>
    </Router>

    );
  }
}

export default withAuthentication(App);
