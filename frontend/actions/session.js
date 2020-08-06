import { createUser, deleteSession, createSession } from "../util/session";

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`;
export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`;
export const RECEIVE_SESSION_ERRORS = `RECEIVE_SESSION_ERRORS`;
export const REMOVE_ERRORS = 'REMOVE ERRORS';

const receiveCurrentUser = user => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveErrors = errors => {
    
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

const removeErrors = () => {
    return {
        type: REMOVE_ERRORS,
    }
}

export const createNewUser = user => dispatch => {
    
    createUser(user).then(user => 
        (dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
}

export const login = user => dispatch => {
    
    createSession(user).then(user => 
        (dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
        ));
}

export const logout = () => dispatch => {
    
    deleteSession().then(() => 
        (dispatch(logoutCurrentUser())
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ));
}

export const remove = () => dispatch => {
    
    dispatch(removeErrors())
}