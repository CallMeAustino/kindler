import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout, toggleShow}) => {
    // debugger
    const display = currentUser ? (
        <section>
            <button onClick={() => toggleShow()} className="dot">{currentUser.username[0].toUpperCase()}</button>
            <div id="pdc">
                <button className="minimal-bttn hover-ksr-green-700 mr" onClick={logout}>Logout</button>
            </div>
        </section>
    ) : (
                <Link className="minimal-bttn hover-ksr-green-700 mr" to="/login">Log In</Link>
        );
    return <section className="relative" id="global-header">
        <section className="global-nav-left items-center">
            
            <button className="minimal-bttn hover-ksr-green-700 mr">Explore</button>
            
            
            <Link className="minimal-bttn hover-ksr-green-700 mr" to="/learn">Start a project</Link>
            
        </section>
        <section className="global-nav-logo items-center">
            <Link to='/'>Kindler</Link>
        </section>
        <section className="global-nav-right items-center">
            <button className="minimal-bttn hover-ksr-green-700 mr">Search</button>
            {display}
        </section> 
        
    </section>
}

export default navBar;