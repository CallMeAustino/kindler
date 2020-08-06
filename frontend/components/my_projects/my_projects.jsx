import React from 'react';
import { connect } from 'react-redux'
import { requestMyProjects } from '../../actions/project'
import { Link } from 'react-router-dom';
import { requestProject } from '../../actions/project'
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterContainer from '../footer/footer_container';

class MyProjects extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
            return (
                <>
                    <NavBarContainer />
                    <h1 className="center index-title">Your Current Projects:</h1>
                    <ul style={{listStyleType:"none"}}>
                        {Object.values(this.props.projects).map((project, idx) => {
                            return <li key={idx} className="bespoke-hover-tranisition-bottom-bar mb-20"><Link to={`/projects/${project.author_id}/${project.id}`}>{project.description}</Link></li>
                        })}
                    </ul>
                    <FooterContainer />
                </>
            )
    }
}

const msp = state => {
    return {
        projects: state.entities.projects,
        state: state
    }
}

const mdp = dispatch => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId)),
        fetchProject: (projectId) => dispatch(requestProject(projectId))
    }
}

export default connect(msp, mdp)(MyProjects);