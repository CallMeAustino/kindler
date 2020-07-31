import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';


class MasterForm extends React.Component {
    constructor(props) {
        super(props) 
        // debugger
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

    }
    handleChange(e, attribute) {
        this.setState({[attribute]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const author_id = store.getState().session.currentUser.id
        const project = this.state;
        delete project["currentStep"];
        debugger
        project["author_id"] = author_id
        debugger
        this.props.createNewProject(project)
    }
        // e.preventDefault();
        // const { category, description, password } = this.state;
    

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
        if (currentStep === 2) {
            return (
                <button
                    className=""
                    type="button" onClick={this._prev}>
                        Category
                    </button>
            )
        } else if (currentStep === 3) {
            return (
                <button
                    className=""
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
                    className=""
                    type="button" onClick={this._next}>
                        Next: Project idea                 
                    </button>
            )
        } else if (currentStep === 2) {
            return (
                <button
                    className=""
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
                    className=""
                    type="button" onClick={this.handleSubmit}>
                    Continue
                </button>
            )   
        } return null;
    }
    //fragment prevents additional DOM nodes from being generated when component renders
    render() {
        // debugger
        return <>
            <span>{this.state.currentStep} of 3</span>
            <form>
                <Page1
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    category={this.state.category}
                />
                <Page2
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    description={this.state.description}
                />
                <Page3
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    location={this.state.location}
                />
                {this.previousButton()}
                {this.nextButton()}
                {this.handleSubmitButton()}
                
            </form>
        </>
    }
}


export default MasterForm;