import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { SignUpLink } from '../components/SignUp';

const landingTheme = {
    textAlign: 'center',
    rounded: true
};

const LandingPage = ({ history }) => {
    return (
        <div>
            LandPage 
            <SignUpLink />
        </div>
    );
};

export default withRouter(LandingPage);