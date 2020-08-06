import { OPEN_MODAL, CLOSE_MODAL } from '../actions/project';

export default (state = null, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default: 
            return state;
    }
}