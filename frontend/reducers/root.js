import { combineReducers } from 'redux';
import sessionReducer from './session';
//entities reducer

const rootReducer = combineReducers({
    session: sessionReducer
});


// const rootReducer = combineReducers({

// })

export default rootReducer;