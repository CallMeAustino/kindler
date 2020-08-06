import React from 'react';

class Page3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <section>
                <section id="onboarding-category-tab">
                    <h2 className="project-prompt">Finally, let's confirm your eligibility.</h2>
                <h3 className="project-prompt">Tell us where you're based and confirm a few other details before we proceed.</h3>
                    <div className="navy-700">
                        <div role="listbox">
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
                            <div className="navy-700">
                                <a href="www.google.com" className="country-warning">What if my country isn't listed?</a>
                            </div>
                            <div className="verification">
                                {/* <input id="age" type="checkbox" value="age"/> */}
                                <button onClick={(e) => this.props.toggle(e.target)} className="verification-button false">I am at least 18 years old.</button>

                                <button onClick={(e) => this.props.toggle(e.target)} className="verification-button false">I can verify an address and bank account.</button>

                                <button onClick={(e) => this.props.toggle(e.target)} className="verification-button false">I can verify a government issued ID.</button>

                                <button onClick={(e) => this.props.toggle(e.target)} className="verification-button false">I have a debit and/or credit card.</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default Page3;