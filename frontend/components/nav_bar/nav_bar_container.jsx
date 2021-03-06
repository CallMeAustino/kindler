import React from 'react';
import { connect }  from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';


const msp = (state) => {
    
    
    return {
        currentUser: state.session.currentUser,
    }
}

const mdp = (dispatch) => {
    function toggleShow(){
        document.getElementById('pdc').classList.toggle("show");
    }
    return {
        logout: () => dispatch(logout()),
        toggleShow: toggleShow
    }
}

export default connect(msp, mdp)(NavBar);