import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import { Link, Redirect } from 'react-router-dom';


class MasterForm extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = { 
            currentStep: 1,
            category: '',
            description: '',
            location: ''
        }

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);

    }
    componentWillUnmount(){
        this.state = {
            redirect: null,
            currentStep: 1,
            category: '',
            description: '',
            location: ''
        }
    }
    handleChange(e, attribute) {
        this.setState({[attribute]: e.target.value})
    }

    toggle(ele) {
        this.forceUpdate();
        $(ele).toggleClass('false');
    }
    handleSubmit(e) {
        
        e.preventDefault();
        const author_id = store.getState().session.currentUser.id
        const project = this.state;
        delete project["currentStep"];
        delete project["redirect"];
        project["author_id"] = author_id
        this.props.createNewProject(project)
            .then(action => {
            return(this.props.history.push(`/projects/${ author_id }/${action.project.id}`))
        })
    }

    _next(){
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })
    }

    _prev(){
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep === 1) {
            return (
                <div className="back-bttn">
                    You're doing great. No, really.
                </div>
            )
        } else if (currentStep === 2) {
            return (
                <button
                    className="back-bttn"
                    type="button" onClick={this._prev}>
                        Category
                    </button>
            )
        } else if (currentStep === 3) {
            return (
                <button
                    className="back-bttn"
                    type="button" onClick={this._prev}>
                    Project idea
                </button>
            )
        } else {
        return null;
        }
    }
    nextButton(){
        let currentStep = this.state.currentStep;
        if (currentStep === 1){
            return (
                <button
                    className="project-bttn"
                    disabled={this.state.category === ""}
                    type="button" onClick={this._next}>
                        Next: Project idea                 
                    </button>
            )
        } else if (currentStep === 2) {
            return (
                <button
                    className="project-bttn"
                    disabled={this.state.description === ""}
                    type="button" onClick={this._next}>
                    Next: Location
                </button>
            )
        } else {
        return null;
        }
    }

    handleSubmitButton(){
        if(this.state.currentStep === 3) {
            
            return (
                <button
                    className="project-bttn"
                    disabled={this.state.location === "" || $(".false").length !== 0}
                    type="button" onClick={this.handleSubmit}>
                    Continue
                </button>
            )   
        } return null;
    }
    render() {
        return <>
        <div className="project-container">
            <div className="project-header">
                <Link className="project-title" to='/'>Kindler</Link>
            </div>
            <span className="page-counter">{this.state.currentStep} of 3</span>
            <form>
                <Page1
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    category={this.state.category}
                    masterState={this.state}
                />
                <Page2
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    description={this.state.description}
                    masterState={this.state}

                />
                <Page3
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    location={this.state.location}
                    masterState={this.state}
                    toggle={this.toggle}

                />
                <div className="grid-col-12">
                    <div className="project-bttn-container">
                        {this.handleSubmitButton()}
                        {this.nextButton()}
                        {this.previousButton()}
                    </div>
                </div>
                
            </form>
        </div>
        </>
    }
}


export default MasterForm;