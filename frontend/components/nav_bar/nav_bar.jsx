import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
    // debugger
    const display = currentUser ? (
        <section>
            <h2>Welcome {currentUser.username}</h2>
            <button className="minimal-bttn hover-ksr-green-700 mr" onClick={logout}>Logout</button>
        </section>
    ) : (
                <Link className="minimal-bttn hover-ksr-green-700 mr" to="/login">Log In</Link>
        );
    return <section className="relative" id="global-header">
        <section className="global-nav-left">
            
            <button className="minimal-bttn hover-ksr-green-700 mr">Explore</button>
            
            
            <Link className="minimal-bttn hover-ksr-green-700 mr" to="/learn">Start a project</Link>
            
        </section>
        <section className="global-nav-logo items-center relative">
            <Link to='/'>Kindler</Link>
        </section>
        <section className="global-nav-right">
            <button className="minimal-bttn hover-ksr-green-700 mr">Search</button>
            {display}
        </section> 
        
    </section>
}

export default navBar;