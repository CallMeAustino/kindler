import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project';
import { merge } from 'lodash';

const projectReducer = (state = {}, action) => {
    
    Object.freeze(state);
    const new_state = {};
    switch (action.type) {
        case RECEIVE_PROJECT:
            new_state[action.project.id] = action.project;
            return Object.assign({}, state, new_state);
        case RECEIVE_PROJECTS:
            const received = {received: true}
            return Object.assign({}, state, action.projects, received);
        default:
            return state;
    }
}

export default projectReducer;