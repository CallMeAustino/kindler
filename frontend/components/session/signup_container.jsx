import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import { Link } from 'react-router-dom'
import SignUp from './signup'


const msp = ( {errors} ) => {
    // debugger
    return {
        errors: errors.session,
        login: <Link to="/login">Log in</Link>
    }
}
const mdp = (dispatch) => {
    return {
        createNewUser: user => dispatch(createNewUser(user))
    };
};


export default connect(msp, mdp)(SignUp);