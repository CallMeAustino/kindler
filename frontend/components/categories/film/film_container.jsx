import React from 'react';
import { connect } from 'react-redux';
import Film from './film';
import { requestMyProjects } from '../../../actions/project';


const msp = (state) => {

    return {
        currentUser: state.session.currentUser,
    }
}

const mdp = (dispatch) => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId))
    }
}

export default connect(msp, mdp)(Film);