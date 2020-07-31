// import { USER_STUFF } from '../actions/session';


const usersReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
}

export default usersReducer;