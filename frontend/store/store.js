import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root';
import ReduxThunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(ReduxThunk))
}

export default configureStore;