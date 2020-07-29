import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const _nullUser = {
    currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
    // debugger
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // return { id: action.currentUser.id };
            const currentUser = action.user 
            return Object.assign({}, { currentUser: currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default: 
            return state;
    }
}

export default sessionReducer;