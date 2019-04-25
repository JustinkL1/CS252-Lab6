import React, { Component } from 'react';
import {firebase} from '../../shared/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../withAuthorization';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

import ReactPlayer from 'react-player'

import './style.css';

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl(Cmd)+C, Enter", text);
}

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: '',
    };
  }

  copyLink() {
    // console.log(window.location.href);
    var shareLink = window.location.href;
    copyToClipboard(shareLink);
  }

  getUsername = () => {
    let currentUser = firebase.auth().currentUser.email;
    console.log(currentUser)
    return currentUser
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }

    const ref = firebase.firestore().collection('forum').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false,
          email: email,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('forum').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/home")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className = {this.state.email?"panel panel-default post-body":"hidden"}>
          <Card className="post-card">
             <CardHeader
              title={this.state.board.title}
              subheader={this.state.board.username+"\t"+this.state.board.mtime}
            />
              {this.state.board.image != " "?<img className="Item_image_show" src={this.state.board.image} alt="Item" />:<img className="Item_image_show"  alt="Item" />}
            <CardContent>
              <Typography component="p">
                {this.state.board.description}
              </Typography>
              {this.state.board.video!=" "?<ReactPlayer url = {
                this.state.board.video
              }
              config = {
                {
                  youtube: {
                    playerVars: {
                      showinfo: 1
                    }
                  },
                }
              }
              />:""}
              
            </CardContent>
            <CardActions disableActionSpacing className="Card-action">
              <IconButton aria-label="Share" type="submit" onClick={() => {this.copyLink()}}>
                <ShareIcon />
              </IconButton>
              <div className={this.state.email !== this.state.board.key?"hidden":"shown"}>
                <Link to={`/Forum_edit/${this.state.key}`} className="btn btn-edit">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-delete">Delete</button>
              </div>
              <Link to="/home" className="btn btn-primary">Back</Link>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Show);