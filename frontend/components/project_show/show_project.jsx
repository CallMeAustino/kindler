import React from 'react';
import { connect } from 'react-redux'
import { requestMyProjects } from '../../actions/project'
import { Link } from 'react-router-dom';
import { requestProject } from '../../actions/project'
import NavBarContainer from '../nav_bar/nav_bar_container'

// import NavBarContainer from "../nav_bar/nav_bar_container";
// import FooterContainer from '../footer/footer_container';


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
        // debugger
        this.props.requestMyProjects(window.store.getState().session.currentUser.id);
        this.props.fetchProject(this.props.match.params.projectId)

    }
    componentDidUpdate(){
        // debugger
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/projects/${this.props.match.params.userId}/${this.props.match.params.projectId}/edit`)
    }
    handleEditButton() {
        // debugger
        if (window.store.getState().entities.projects[this.props.match.params.projectId] !== undefined) {
            // debugger
            window.currentProj = this.props.match.params.projectId
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
        let current_proj = {};
        current_proj = window.store.getState().entities.projects[parseInt(this.props.match.params.projectId)]
       
        // debugger
        if (current_proj !== undefined) {
        return (
            <>
                <NavBarContainer />
                <div style={{padding:20}} className="bg-lightgray">
                    <section>
                        <h1>{current_proj.name}</h1>
                        <p>{current_proj.description}</p>
                    </section>
                    <section>
                        <div>image goes here</div>
                        <section>
                            <div>
                                <h3>"X"</h3>
                                <h4>pledged of {current_proj.goal} goal</h4>
                            </div>
                            <div>
                                <h3>"#of backers"</h3>
                                <h4>backers</h4>
                            </div>
                        <button className="bttn bttn-green bttn-large">
                            Back this project
                        </button>
                        </section>
                        <div>
                            {current_proj.author_id === window.store.getState().session.currentUser.id ? this.handleEditButton() : null}
                        </div>

                    </section>
                    
                </div>
                {/* <FooterContainer /> */}
            </>
        )} else return null;
    }
}

const msp = state => {
    return {
        project: state.entities.projects
    }
}

const mdp = dispatch => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId)),
        fetchProject: (projectId) => dispatch(requestProject(projectId))
    }
}

export default connect(msp,mdp)(ShowProject);

//{/* {current_proj.author_id === window.store.getState().session.currentUser.id ? this.handleEditButton() : null} */}