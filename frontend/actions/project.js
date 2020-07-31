import { createProject, updateProject, deleteProject } from "../util/projects";

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

const receiveProject = project => {
    // debugger
    return {
        type: RECEIVE_PROJECT,
        project
    }
}

const receiveErrors = errors => {
    // debugger
    return {
        type: RECEIVE_PROJECT_ERRORS,
        errors
    }
}


export const createNewProject = project => dispatch => {
    // debugger
    createProject(project).then(project =>
        (dispatch(receiveProject(project))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
}
