import React from 'react';
import { connect }  from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';


const msp = (state) => {
    // debugger
    
    return {
        currentUser: state.session.currentUser,
        // userLetter: state.session.currentUser.username[0].toUpperCase()
    }
}

const mdp = (dispatch) => {
    function toggleShow(){
        document.getElementById('pdc').classList.toggle("show");
        console.log("Hello");
    }
    return {
        logout: () => dispatch(logout()),
        toggleShow: toggleShow
    }
}

export default connect(msp, mdp)(NavBar);