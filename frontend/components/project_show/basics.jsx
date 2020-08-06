import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'

class Basics extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.masterState.currentStep === 1) {
            return (
                <div style={{padding:20}}>
                <NavBarContainer />
                    <section id="basics-header-container border-top">
                    <h1 className="center edit-page-titles light">Start with the basics</h1>
                    <h3 className="center edit-page-titles light">Make it easy for people to learn about your project.</h3>
                </section>
                    <section className="ml-20">
                            <h2>Project title</h2>
                            <p>Write a clear brief title that helps people quickly understand the gist of your project.</p>
                                <input className="project-description-small"
                                    value={this.props.masterState.name}
                                    onChange={(e) => this.props.handleChange(e, "name")}
                                    placeholder="Papercuts: A Party game for scissors."
                                />
                        </section>

                        <section className="ml-20">
                            <h2>Project category</h2>
                            <p>Choose the category that most closely aligns with your project.</p>
                            <select
                                value={this.props.masterState.category}
                                role="presentation"
                                className="category-dropdown"
                                onChange={(e) => this.props.handleChange(e, "category")}
                            >
                                <option role="option" value="0" hidden>Select your category</option>
                                <option role="option" value="Art">Art</option>
                                <option role="option" value="Comics">Comics & Illustration</option>
                                <option role="option" value="Design & Tech">Design & Tech</option>
                                <option role="option" value="Film">Film</option>
                                <option role="option" value="Food & Craft">Food & Craft</option>
                                <option role="option" value="Games">Games</option>
                                <option role="option" value="Music">Music</option>
                                <option role="option" value="Publishing">Publishing</option>
                            </select> 
                        </section>

                    <section className="ml-20">
                        <h2>Project location</h2>
                        <p>Enter the location that best describes where your country is based.</p>
                        <select
                                value={this.props.masterState.location}
                                className="country-dropdown"
                                role="presentation"
                                onChange={(e) => this.props.handleChange(e, "location")}
                            >
                                <option role="option" value="0" hidden>Select your country</option>
                                <option role="option" value="Australia">Australia</option>
                                <option role="option" value="Belgium">Belgium</option>
                                <option role="option" value="Canada">Canada</option>
                                <option role="option" value="Denmark">Denmark</option>
                                <option role="option" value="France">France</option>
                                <option role="option" value="Germany">Germany</option>
                                <option role="option" value="Hong Kong">Hong Kong</option>
                                <option role="option" value="Japan">Japan</option>
                                <option role="option" value="United States">United States</option>
                            </select>
                        </section>

                    <section className="ml-20">
                            <h2>Funding goal</h2>
                            <p>Set an achievable goal that covers what you need to complete your project.</p>
                            <input className="project-description"
                                value={this.props.masterState.goal}
                                onChange={(e) => this.props.handleChange(e, "goal")}
                                placeholder="0"
                            />
                        </section>
                    
                    
                </div>
            )
        }
        return null;
    }
}

export default Basics;

//handle submit
//current step