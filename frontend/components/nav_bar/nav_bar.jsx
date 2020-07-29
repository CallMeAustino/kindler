import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
    // debugger
    const display = currentUser ? (
        <section>
            <h2>Welcome {currentUser.username}</h2>
            <button onClick={logout}>Logout</button>
        </section>
    ) : (
            <div>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );
    return <section className="relative" id="global-header">
        <section className="global-nav-left">
            
                <Link className="btn mr" to="/explore">Explore</Link>
            
            
                <Link className="btn" to="/learn">Start a project</Link>
            
        </section>
        <section className="global-nav-logo items-center relative">
            <Link to='/'>Kindler</Link>
        </section>
        <section className="global-nav-right">
            <button className="mr">
                Search
            </button>
            {display}
        </section> 
        
    </section>
}

export default navBar;