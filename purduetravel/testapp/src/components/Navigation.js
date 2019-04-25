import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import Button from '@material-ui/core/Button';


const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
 
  <ul>
    <Button color="primary" component={Link} to = {routes.HOME}>
      HOME
    </Button>
    
    
    <SignOutButton/>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    {/* <Button component={Link} to = {routes.LANDING}>
      Sign In
    </Button>   */}
  </ul>

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);