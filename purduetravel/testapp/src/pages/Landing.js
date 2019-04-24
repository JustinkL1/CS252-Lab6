import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const landingTheme = {
    textAlign: 'center',
    rounded: true
};

const LandingPage = ({ history }) => {
    return (
        <div>
            HomePage 
        </div>
    );
};

export default withRouter(LandingPage);