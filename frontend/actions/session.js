import { createUser, deleteSession, createSession } from `../utils/session`;

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`;
export const REMOVE_CURRENT_USER = `REMOVE_CURRENT_USER`;

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};

export const createNewUser = user => dispatch => 
    createUser(user).then(user => dispatch(receiveCurrentUser(user)));

export const login = user => dispatch =>
    createSession(user).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => {
    deleteSession().then(() => dispatch(removeCurrentUser()));
}