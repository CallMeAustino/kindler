import { createProject, updateProject, deleteProject, fetchMyProjects } from "../util/projects";

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

const receiveProject = project => {
    // debugger
    return {
        type: RECEIVE_PROJECT,
        project
    }
}

const receiveProjects = projects => {
    // debugger
    return {
        type: RECEIVE_PROJECTS,
        projects
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
    return createProject(project).then(project =>
        { 
            return (dispatch(receiveProject(project))
        )}, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
}

export const requestMyProjects = userId => dispatch => {
    fetchMyProjects(userId).then(projects =>
        (dispatch(receiveProjects(projects))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
}