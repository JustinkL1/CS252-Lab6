import React, { Component } from 'react';
import withAuthorization from '../components/withAuthorization';
import Display from './Display';

class HomePage extends Component {
 

  render() {
    return (
        <Display/>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);