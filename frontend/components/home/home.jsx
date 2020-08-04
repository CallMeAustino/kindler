import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchMyProjects } from './util/projects';
// import { requestMyProjects } from '../../actions/project';



class Home extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        debugger
        this.props.requestMyProjects(window.currentUser.id)
    }
    
    render(){
        debugger
        return <section className="main-content">
            <div className="categories">
                <nav className="flex justify-center">

                </nav>
            </div>

            <div className="grid-container">

            </div>
        </section>
    }
}

export default Home;