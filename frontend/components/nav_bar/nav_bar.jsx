import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout, toggleShow}) => {
    
    const display = currentUser ? (
        <section>
            <button onClick={() => toggleShow()} className="dot">{currentUser.username[0].toUpperCase()}</button>
            <div id="pdc" className="rounded">
                <div className="dropdown-container flex column">
                    <Link to="/myprojects">My Projects</Link>
                    <button className="minimal-bttn hover-ksr-green-700 mr mt-20" onClick={logout}>Logout</button>
                </div>
            </div>
        </section>
    ) : (
                <Link className="minimal-bttn hover-ksr-green-700 mr" to="/login">Log In</Link>
        );
    return <>
    <section className="relative" id="global-header">
        <section className="global-nav-left items-center">
            
            <Link className="minimal-bttn hover-ksr-green-700 mr" to="/explore">Explore</Link>
            
            
            <Link className="minimal-bttn hover-ksr-green-700 mr" to="/learn">Start a project</Link>
            
        </section>
        <section className="global-nav-logo items-center">
            <Link to='/'>Kindler</Link>
        </section>
        <section className="global-nav-right items-center">
            <button className="minimal-bttn hover-ksr-green-700 mr tooltip">Search
                <span className="tooltiptext">This feature is in the works!</span></button>
            {display}
        </section> 
    </section>
        <div className="subcategory-bar-top">
                <ul className="flex center inline">
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/arts">Arts</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/comics-illustration">Comics & Illustration</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/design-tech">Design & Tech</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/film">Film</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/food-craft">Food & Craft</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/games">Games</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/music">Music</Link></li>
                    <li><Link className="minimal-bttn hover-ksr-green-700 mr" to="/publishing">Publishing</Link></li>
                </ul>
        </div>
    </>
        
}

export default navBar;