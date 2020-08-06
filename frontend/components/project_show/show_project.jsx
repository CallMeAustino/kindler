import React from 'react';
import { connect } from 'react-redux'
import { requestMyProjects } from '../../actions/project'
import { Link } from 'react-router-dom';
import { requestProject } from '../../actions/project'
import { patchProject } from '../../actions/project';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterContainer from '../footer/footer_container';
import { openModal, closeModal } from '../../actions/project'

class ShowProject extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentProject: null
        }

        this.handleEdit = this.handleEdit.bind(this)
    }
    componentDidMount(){
        
        this.props.requestMyProjects(window.store.getState().session.currentUser.id);
        this.props.fetchProject(this.props.match.params.projectId)

    }
    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/projects/${this.props.match.params.userId}/${this.props.match.params.projectId}/edit`)
    }
    handleEditButton() {
        
        if (window.store.getState().entities.projects[this.props.match.params.projectId] !== undefined) {
            
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
        debugger
        
        let current_proj = {};
        current_proj = window.store.getState().entities.projects[parseInt(this.props.match.params.projectId)]
       
        
        if (current_proj !== undefined) {
        return (
            <>
                <NavBarContainer />
                <div style={{padding:20}} className="bg-lightgray border-top">
                    <div>
                        {current_proj.author_id === window.store.getState().session.currentUser.id ? this.handleEditButton() : null}
                    </div>
                    <section className="flex center column mb-20">
                        <h1>{current_proj.name}</h1>
                        <p>{current_proj.description}</p>
                    </section>
                    <section className="flex">
                        <div className="two-three">image goes here</div>
                        <section className="one-three">
                            <div>
                                <h3 className="pledged">${current_proj.sum}</h3>
                                <h4 className="pledged-total">pledged of ${current_proj.goal} goal</h4>
                            </div>
                            <div>
                                <h3 className="backers">{current_proj.total_backers}</h3>
                                <h4 className="backers-word">backers</h4>
                            </div>
                            {this.props.modal}
                        </section>
                    </section>
                    
                </div>
                <FooterContainer />
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
        fetchProject: (projectId) => dispatch(requestProject(projectId)),
        patchProject: (project) => dispatch(patchProject(project)),
        modal: (
            <button className="bttn bttn-green bttn-large" onClick={() => dispatch(openModal('back'))}>
                Back this project
            </button>
        ),
        closeModal: () => dispatch(closeModal())

    }
}

export default connect(msp,mdp)(ShowProject);
