import React from 'react';
import { connect } from 'react-redux'
import { requestMyProjects } from '../../actions/project'
import { Link } from 'react-router-dom';
import { requestProject } from '../../actions/project'
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterContainer from '../footer/footer_container';


// import NavBarContainer from "../nav_bar/nav_bar_container";
// import FooterContainer from '../footer/footer_container';


// import { fetchRecentProject } from '../../actions/project'

class MyProjects extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
            return (
                <>
                    <NavBarContainer />
                    {/* {this.props.projects.forEach(prop => {

                    })} */}
                    <FooterContainer />
                </>
            )
    }
}

const msp = state => {
    return {
        projects: state.entities.projects
    }
}

const mdp = dispatch => {
    return {
        requestMyProjects: (userId) => dispatch(requestMyProjects(userId)),
        fetchProject: (projectId) => dispatch(requestProject(projectId))
    }
}

export default connect(msp, mdp)(MyProjects);