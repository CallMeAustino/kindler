import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState)

    //window objects

    window.store = store
    // window.onclick = function(e) {
    //     debugger
        // const pdc = document.getElementById('pdc');
        // if(!e.target.matches('#pdc')) {
        //     if (e.target.classList.contains('show')) {
        //         debugger
        //         e.target.classList.remove('show');
        //     }
        // }
    // }
    ReactDOM.render(<Root store={store}/>, root)
})