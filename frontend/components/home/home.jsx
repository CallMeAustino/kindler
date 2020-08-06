import React from 'react';
import { Link } from 'react-router-dom';





class Home extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        debugger
        if (window.store.getState().session.currentUser !== null) {
            this.props.requestMyProjects(window.store.getState().session.currentUser.id)
        }
    }

    componentDidUpdate(){
    }
    
    render(){
        // debugger
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