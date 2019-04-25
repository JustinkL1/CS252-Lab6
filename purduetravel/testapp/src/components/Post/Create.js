import React, { Component } from 'react';
import {firebase} from '../../shared/firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../withAuthorization';
import { Link } from 'react-router-dom';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';

import './style.css';


var u = " ";
let userEmail;

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('forum');
    this.state = {
      title: '',
      description: '',
      mtime: '',
      image: '',
      username: '',
      key: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);

    
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    var name, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      userEmail = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }
    console.log(name, userEmail, photoUrl, uid, emailVerified)
  }

  onSubmit = (e) => {
    e.preventDefault();

    var event = new Date();
    var date = event.toLocaleString('en-US')

    const {
      title,
      description,
      mtime,
      image,
      username,
      key,
    } = this.state;
    
    this.ref.add({
      title,
      description,
      mtime: date,
      image: u,
      username: userEmail,
      key: userEmail,
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        image: '',
        username: '',
        key: '',
      });
      u = " "
      this.props.history.push("/home")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('input-image')[0].files[0]

    d.append('image', e)

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID 870f5affa924d77`)
    r.onreadystatechange = function () {
      if (r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        u = `https://i.imgur.com/${res.data.id}.png`
      }
    }

    r.send(d)
  }

  render() {
    const isInvalid =
      this.state.title === '';

    const {
      title,
      description,
      location,
      mtime,
      image,
      video,
    } = this.state;
    return (
      <div className="container">
        <div className="panel panel-create">
          <div className="panel-heading">
            <h3 className="panel-title">
              Add Post
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/home" className="btn btn-primary">Cancel</Link></h4>
            <FormGroup className="form-group">
              <Input type="text" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              <TextField
                  id="filled-multiline-static"
                  label="Description"
                  multiline
                  rows="4"
                  name="description"
                  margin="normal"
                  onChange={this.onChange}
                  value = {description}
                />
              <div>
                <FormLabel component="legend">Image</FormLabel>
                <input type="file" className="input-image" onChange={this.uploadImage.bind(this)}/><br/>
              </div>
            
              <Button color="primary" variant="outlined" disabled={isInvalid} onClick={this.onSubmit}>Post</Button>

            </FormGroup>
          </div>
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
)(Create);