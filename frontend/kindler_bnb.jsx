import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { requestMyProjects } from './actions/project';
// import { fetchMyProjects } from './util/projects';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }, 
        };
    }
    const store = configureStore(preloadedState)

    //window objects

    window.store = store
    ReactDOM.render(<Root store={store}/>, root)
})