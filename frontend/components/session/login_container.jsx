import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(null, mdp)(Login);