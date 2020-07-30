import React from 'react';
import { connect } from 'react-redux';
import { login, remove } from '../../actions/session';
import Login from './login';
import { Link } from 'react-router-dom'

import SignUpContainer from './signup_container'

const msp = ( {errors} ) => {
    return {
        errors: errors.session,
        signup: <Link to="/signup">Sign Up</Link>
    }
}

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user)),
        removeErrors: () => dispatch(remove())
    }
}

export default connect(msp, mdp)(Login);