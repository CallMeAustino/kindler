import React from 'react';

class Page3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // debugger
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <section>
                <section id="onboarding-category-tab">
                    <h2>Finally, let's confirm your eligibility.</h2>
                    <h3>Tell us where you're based and confirm a few other details before we proceed.</h3>
                    <div className="navy-700">
                        <div role="listbox">
                            <select
                                role="presentation"
                                onChange={(e) => this.props.handleChange(e, "location")}
                            >
                                <option role="option" value="0">Select your country</option>
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
                            <br></br>
                            <input id="age" type="checkbox" value="age"/>
                            <label>I am at least 18 years old.</label>

                            <input id="age" type="checkbox" value="age" />
                            <label>I can verify an address and bank account.</label>

                            <input id="age" type="checkbox" value="age" />
                            <label>I can verify a government issued ID.</label>

                            <input id="age" type="checkbox" value="age" />
                            <label>I have a debit and/or credit card.</label>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default Page3;