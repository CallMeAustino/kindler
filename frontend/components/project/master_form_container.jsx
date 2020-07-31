import React from 'react';
import { connect } from 'react-redux';
import MasterForm from './master_form';
import { createNewProject } from '../../actions/project';

const msp = (state) => {
    return {
    }
}

const mdp = (dispatch) => {
    return {
        createNewProject: project => dispatch(createNewProject(project)),
    };
};

export default connect(msp, mdp)(MasterForm);