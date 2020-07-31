import React from 'react';

class Page2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
    if (this.props.currentStep !== 2) {
        return null
    }
    return (
        <section>
            <section id="onboarding-category-tab">
                <h2 className="project-prompt">Describe what you'll be creating.</h2>
                <h3 className="project-prompt">And don't worry, you can edit this later, too.</h3>
                <div className="navy-700">
                    <textarea className="project-description"
                        value={this.props.masterState.description}
                        onChange={(e) => this.props.handleChange(e, "description")}
                        placeholder="A documentary about shoes."
                    />
                </div>
            </section>
        </section>
    )}
}

export default Page2;