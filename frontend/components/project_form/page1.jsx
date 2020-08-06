import React from 'react';

class Page1 extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        
    if (this.props.currentStep !==1) {
        return null
    }
        return (
            <section>
                <section id="onboarding-category-tab">
                    <h2 className="project-prompt">First, let's get you set up.</h2>
                    <h3 className="project-prompt">Pick a project category to connect with a specific community. You can always update this later.</h3>
                    <div className="navy-700">
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
                    </div>
                </section>
            </section>
        )
    }
}

export default Page1;