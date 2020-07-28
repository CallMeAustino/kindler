import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
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
        <section className="global-nav-left flex">
            <a className="mr">Explore</a>
            <a>Start a project</a>
        </section>
        <section className="global-nav-right flex">
            <button>
                <span className="mr">
                    Search
                </span>
            </button>
            {display}
        </section> 
        <section className="global-nav-logo items-center relative">
            <h1>Kickstarter</h1>
        </section>
    </section>
}

export default navBar;