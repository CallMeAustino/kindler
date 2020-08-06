import React from 'react';
import { connect } from 'react-redux';
import { requestMyProjects } from '../../actions/project';
import { Redirect } from 'react-router-dom';
import Basics from './basics';
import Story from './story';
import { patchProject } from '../../actions/project';


class EditShowProject extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        const current_proj = window.store.getState().entities.projects[parseInt(window.currentProj)]
        // if (current_proj !== undefined) {
        this.state = {
                currentStep: 1,
                name: current_proj.name,
                category: current_proj.category,
                location: current_proj.location,
                goal: current_proj.goal,
                description: current_proj.description
            // currentStep: 1,
            // name: null,
            // category: null,
            // location: null,
            // goal: null,
            // description: null
        }
        
        // else {
        //     this.state = {
        //         currentStep: 1,
        //         name: current_proj.name,
        //         category: current_proj.category,
        //         location: current_proj.location,
        //         goal: current_proj.goal,
        //         description: current_proj.description
        // }
        this._next = this._next.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // debugger
        this.props.requestMyProjects(window.store.getState().session.currentUser.id);
    }
    componentDidUpdate() {
    }
    handleChange(e, attribute) {
        this.setState({ [attribute]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        const author_id = store.getState().session.currentUser.id
        const project = this.state;
        delete project["currentStep"];
        delete project["redirect"];
        project["author_id"] = author_id;
        debugger
        project["id"] = parseInt(this.props.match.params.projectId);
        debugger
        this.props.patchProject(project)
        //  .then(action => {
            // return(this.props.history.push(`/projects/${ author_id }/${action.project.id}`))
        // })
        //alert or some indication that its been saved
    }
    _next() {
        let currentStep = this.state.currentStep;
        currentStep = currentStep === 1 ? 2 : 1;
        this.setState({
            currentStep: currentStep
        })
    }
    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep === 1) {
            return (
                <button
                    className="bttn bttn-green bttn-medium next-button"
                    disabled={this.state.category === "" || this.state.location === ""}
                    type="button" onClick={this._next}>
                    Next: Story
                </button>
            )
        } else if (currentStep === 2) {
            return (
                <button 
                    className="bttn bttn-green bttn-medium next-button"
                    disabled={this.state.name === ""}
                    type="button" onClick={this._next}>
                    Next: Basics
                </button>
            )
        }
    }
    handleSubmitButton() {
            return (
                <button 
                    className="bttn bttn-green bttn-medium"
                    disabled={this.state.location === ""}
                    type="button" onClick={this.handleSubmit}>
                    Save Changes
                </button>
            )
    }
    render() {
        // debugger
        if (window.store.getState().session.currentUser.id === parseInt(this.props.match.params.userId) && window.store.getState().entities.projects["received"]) {
            return (
                <>
                <form>
                    <div>
                        <Basics
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            masterState={this.state}
                        />
                        <Story
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            masterState={this.state}
                        />
                    </div>
                </form>
                    <div style={{ padding: 20 }} className="flex">
                    {this.nextButton()}
                    {this.handleSubmitButton()}
                </div>
                </>
            )
        } else {
            return (
                <Redirect to={`/projects/${this.props.match.params.userId}/${this.props.match.params.projectId}`}/>
            )
        }
    }
}

const msp = state => {
    return {
    }
}

const mdp = dispatch => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId)),
        patchProject: (project) => dispatch(patchProject(project))
    }
}

export default connect(msp, mdp)(EditShowProject);