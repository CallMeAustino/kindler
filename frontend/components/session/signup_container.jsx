import React from 'react';
import { connect } from 'react-redux';
import { createNewUser, remove } from '../../actions/session';
import { Link } from 'react-router-dom'
import SignUp from './signup'


const msp = ( {errors} ) => {
    // debugger
    return {
        errors: errors.session,
        login: <Link className="minimal-bttn hover-ksr-green-700" to="/login">Log in</Link>
    }
}
const mdp = (dispatch) => {
    return {
        createNewUser: user => dispatch(createNewUser(user)),
        removeErrors: () => dispatch(remove())
    };
};


export default connect(msp, mdp)(SignUp);