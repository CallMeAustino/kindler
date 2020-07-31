import { RECEIVE_PROJECT } from '../actions/project';

const projectReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action;
        default:
            return state;
    }
}

export default projectReducer;