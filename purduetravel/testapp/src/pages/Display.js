import ThreadDisplay from '../components/ThreadDisplay.js';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import React, { Component } from 'react';
import withAuthorization from '../components/withAuthorization';
import {firebase} from '../shared/firebase'
import '../components/Post/style.css';
class ForumPage extends Component {

  constructor(props) {
    super(props);
    this.database = firebase.database();
    
  }

  render() {
    return (
      <div>
        <ThreadDisplay database={this.database} />
      </div>   
      )
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(ForumPage);