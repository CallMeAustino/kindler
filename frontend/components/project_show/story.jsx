import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'


class Story extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.masterState.currentStep === 2) {
            return (
                <div style={{padding:20}}>
                    <NavBarContainer />
                    <section id="basics-header-container border-top">
                        <h1 className="center edit-page-titles light">Introduce your project</h1>
                        <h3 className="center edit-page-titles light">Tell people why they should be excited about your project. Get specific but be clear and brief.</h3>
                    </section>
                    <form>
                        <section className="ml-20">
                            <h2>Project description</h2>
                            <p>Describe what you're raising funds to do, why you care about it, and how you plan to make it happen.</p>
                            <textarea className="project-description"
                                value={this.props.masterState.description}
                                onChange={(e) => this.props.handleChange(e, "description")}
                                placeholder="Write about your project like you're explaining to a friend..."
                            />
                        </section>
                    </form>

                </div>
            )
        }
        return null;
    }
}

export default Story;