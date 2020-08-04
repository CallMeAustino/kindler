import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project';
import { merge } from 'lodash';

const projectReducer = (state = {}, action) => {
    // Object.freeze(state);
    const new_state = state;
    switch (action.type) {
        case RECEIVE_PROJECT:
            return new_state[action.project.id] = action.project;
        case RECEIVE_PROJECTS:
            return merge({}, action.projects);
        default:
            return state;
    }
}

export default projectReducer;