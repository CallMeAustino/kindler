import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    // debugger
    return <section className="relative">
        <div id="subcategory_bar">
                <div className="border-bottom">
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
            </div>
        <div className="grid-container">
            <div className="grid-row flex justify-center">
                <div id="about">
                    <h3>ABOUT</h3>
                    <ul>
                        <li>About Me</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div id="support">
                    <h3>SUPPORT</h3>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Cohort Mates</li>
                    </ul>
                </div>
                <div id="more">
                    <h3>MORE FROM AUSTIN</h3>
                    <ul>
                        <li>Other Apps</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className ="border-bottom">
            <div className="grid-container">
                <div className="grid-row">
                    <div>
                        <section>Kindler, (c) 2020</section>
                        <div>
                            <section className="social-links"></section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt4">
            <div className="grid-container">
                <div className="grid-row">
                    <ul>
                        <li>Trust and Safety</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Accessibility Statement</li>
                        <li>CA Notice of Consent</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}

export default footer;