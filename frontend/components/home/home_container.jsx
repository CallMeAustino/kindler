import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { requestMyProjects } from '../../actions/project';


const msp = (state) => {
    // debugger
    return {
        currentUser: state.session.currentUser,
    }
}

const mdp = (dispatch) => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId))
    }
}

export default connect(msp, mdp)(Home);