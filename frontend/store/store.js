import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(ReduxThunk, logger))
}

export default configureStore;