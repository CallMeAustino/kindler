import React from 'react';
import { connect } from 'react-redux';
import { requestMyProjects } from '../../actions/project';
import { Redirect } from 'react-router-dom';
import Basics from './basics';
import Story from './story';


class EditShowProject extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 1
            
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        debugger
        this.props.requestMyProjects(window.currentUser.id);
    }
    componentDidUpdate() {
        // debugger
    }
    render() {
        debugger
        if (window.currentUser.id === parseInt(this.props.match.params.userId)) {
            return (
                <>
                <form>
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
                </form>
                </>
            )
        } else {
            return (
                <Redirect to="/"/>
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
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId))
    }
}

export default connect(msp, mdp)(EditShowProject);