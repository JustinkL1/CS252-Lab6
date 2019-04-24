import React, { Component } from 'react';
import withAuthorization from '../components/withAuthorization';

class HomePage extends Component {
 

  render() {
    return (
        <h1>Homepage</h1>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);