import React from 'react';
import { connect } from 'react-redux';
import Home from './home';

const msp = (state) => {
    // debugger
    return {
        currentUser: state.session.currentUser,
    }
}

const mdp = (dispatch) => {
    return {
    }
}

export default connect(msp, mdp)(Home);