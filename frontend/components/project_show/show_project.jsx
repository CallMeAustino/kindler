import React from 'react';
import { connect } from 'react-redux'
import { requestMyProjects } from '../../actions/project'

// import { fetchRecentProject } from '../../actions/project'

class ShowProject extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentProject: null
        }

        this.handleEdit = this.handleEdit.bind(this)
    }
    componentDidMount(){
        debugger
        this.props.requestMyProjects(window.currentUser.id);
        // }
        // debugger
    //    this.props.fetchProject(this.props.match.params.projectId)

    }
    componentDidUpdate(){
        // debugger
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/projects/${this.props.match.params.userId}/${this.props.match.params.projectId}/edit`)
    }
    handleEditButton() {
        if (window.store.getState().entities.projects[this.props.match.params.projectId] !== undefined) {
            debugger
            return (
                <button
                    className="project-bttn"
                    type="button" onClick={this.handleEdit}>
                    Edit
                </button>
            )
        } return null;
    }
    render() {
        const current_proj = window.store.getState().entities.projects[this.props.match.params.projectId];
        debugger
        return (
            <>
                <div>
                    {current_proj ? this.handleEditButton() : "nada"}
                </div>
            </>
        )
    }
}

const msp = state => {
    return {
        project: state.entities.projects
    }
}

const mdp = dispatch => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId))
    }
}

export default connect(msp,mdp)(ShowProject);