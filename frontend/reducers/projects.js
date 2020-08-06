import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project';
import { merge } from 'lodash';

const projectReducer = (state = {}, action) => {
    // debugger
    // Object.freeze(state);
    const new_state = state;
    switch (action.type) {
        case RECEIVE_PROJECT:
            new_state[action.project.id] = action.project;
            return new_state;
        case RECEIVE_PROJECTS:
            const received = {received: true}
            return Object.assign({}, new_state, action.projects, received);
            // new_state["received"] = true;
            // return new_state;
            // return merge({}, action.projects);
        default:
            return state;
    }
}

export default projectReducer;