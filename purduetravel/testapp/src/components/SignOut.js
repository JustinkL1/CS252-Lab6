import React from 'react';
import Button from '@material-ui/core/Button';
import { auth } from '../shared';

const SignOutButton = () =>
 
  <Button variant="contained" onClick={auth.doSignOut}>
    Sign Out
  </Button>


export default SignOutButton;