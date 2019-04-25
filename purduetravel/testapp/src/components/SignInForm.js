import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../shared';
import * as routes from '../constants/routes';
import {firebase} from '../shared/firebase';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', 
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const { classes } = this.props;

      //check user logged in
    firebase.auth().onAuthStateChanged(function(password) {
        if (password) {
            // if user logged in
            console.log('User found: ', password);
        } else {
            console.log('User not found');
        }
    });


    return (  
        <Grid container className={classes.root}>
            <CssBaseline />
            <main className={classes.layout}>
            <Paper className={classes.paper}>
                <form onSubmit={this.onSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                            autoComplete="email" autoFocus
                        />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>

                    { error && <p>{error.message}</p> }
                </form>
                </Paper>
            </main>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(SignInForm));

export {
  SignInForm,
  INITIAL_STATE,
};
