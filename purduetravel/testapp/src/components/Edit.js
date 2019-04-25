import React, { Component } from 'react';
import {firebase} from '../shared/firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from './withAuthorization';

import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './style.css';

var u;
class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      mtime: '',
      image: '',
      username: '',
      key: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('forum').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          mtime: board.mtime,
          image: board.image,
          username: board.username,
          key: board.key,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {
      title,
      description,
      mtime,
      image,
      username,
      key,
    } = this.state;

    const updateRef = firebase.firestore().collection('forum').doc(this.state.key);
    updateRef.set({
      title,
      description,
      mtime,
      image,
      username,
      key,
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        mtime: '',
        image: '',
        username: '',
        key: '',
      });
      this.props.history.push("/Forum_show/"+this.props.match.params.id)
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
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT Post
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/Forum_show/${this.state.key}`} className="btn btn-primary">Cancel</Link></h4>
            <FormGroup>
              <div className="form-group"> 
                <Input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <TextField name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" cols="80" rows="3">{this.state.description}</TextField>
              </div>
              <div className="form-group">
                <Input type="text" className="form-control" name="image" value={this.state.image} onChange={this.onChange}/><br/>
                <input type="file" className="input-image" onChange={this.uploadImage.bind(this)}/>
              </div>
            
              {/* <button type="submit" className="btn btn-success">Submit</button> */}
              <Button color="primary" variant="outlined" disabled={isInvalid} onClick={this.onSubmit}>Post</Button>

            {/* </form> */}
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
)(Edit);
