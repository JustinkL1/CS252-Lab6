import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../components/SignUp';
import SignInForm from '../components/SignInForm'
import Grid from '@material-ui/core/Grid';


const landingTheme = {
    textAlign: 'center',
    rounded: true
};


const LandingPage = ({ history }) => {
    return (
        <div>
            <SignInForm history={history} />
            <Grid style={landingTheme}>
                <SignUpLink />
            </Grid>
        </div>
    );
};

export default withRouter(LandingPage);