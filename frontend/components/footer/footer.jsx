import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    
    return <section style={{marginTop:150}}className="relative">
        <div id="subcategory_bar">
                <div className="categories-container">
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
            <div id="info-footer" className="flex center">
                <div id="about">
                    <h5>ABOUT</h5>
                    <ul>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://docs.google.com/document/d/1H3U5DY_PQoa4I53AB_Jv5ncSy34oRfPT5Qjm03JmoYU/edit?usp=sharing">Resume</a></li>
                    </ul>
                </div>
                <div id="support">
                    <h5>SUPPORT</h5>
                    <ul>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://docs.google.com/document/d/1H3U5DY_PQoa4I53AB_Jv5ncSy34oRfPT5Qjm03JmoYU/edit?usp=sharing">Lauren Lee</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://www.linkedin.com/in/jlin2235/">Jin Lin</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://www.linkedin.com/in/daniel-guardado-106867197/">Daniel Guardado</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://callmeaustino.github.io/silica/">Mackenzie Young</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://www.linkedin.com/in/naraskim/">Nara Lee</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://www.linkedin.com/in/connor-j-murphy/">Connor Murphy</a></li>
                    </ul>
                </div>
                <div id="more">
                    <h5>MORE FROM AUSTIN</h5>
                    <ul>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://callmeaustino.github.io/silica/">Silica</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="http://www.rpskill.com/#/">RPSkill</a></li>
                        <li><a className="minimal-bttn hover-ksr-green-700" href="https://github.com/CallMeAustino">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className ="socials-container"> 
            <div>
                <div className="k">K</div>
                <section className="inline">Kindler, © 2020</section>
                <div>
                    <section className="social-links"></section>
                </div>
            </div>
        </div>
        <div className="pt4">    
            <ul className="flex center inline">
                <li className="minimal-bttn hover-ksr-green-700 mr">Trust and Safety</li>
                <li className="minimal-bttn hover-ksr-green-700 mr">Terms of Use</li>
                <li className="minimal-bttn hover-ksr-green-700 mr">Privacy Policy</li>
                <li className="minimal-bttn hover-ksr-green-700 mr">Cookie Policy</li>
                <li className="minimal-bttn hover-ksr-green-700 mr">Accessibility Statement</li>
                <li className="minimal-bttn hover-ksr-green-700 mr">CA Notice of Consent</li>
            </ul>
        </div>
    </section>
}

export default footer;