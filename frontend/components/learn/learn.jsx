import React from 'react';
import { Link } from 'react-router-dom';

const learn = () => {
    
    return <section className="main-content">
        <section className="grid-container learn-title">
            <h1 className="type-48">Bring your creative project to life.</h1>
            <Link style={{color: "white"}} to="/start" className="bttn bttn-green bttn-large">Start a project</Link>
        </section>
    </section>
}

export default learn;