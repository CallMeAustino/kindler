import React from 'react';
import HomeContainer from './home/home_container';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import LearnContainer from './learn/learn_container';
import MasterFormContainer from './project_form/master_form_container';
import MyProjects from './my_projects/my_projects.jsx';
import ShowProject from './project_show/show_project';
import EditShowProject from './project_show/edit_show_project';
import HeaderLayout from '../util/header_util';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';

const App = () => {
    return <>
    <Modal />
    <Switch>
        <HeaderLayout exact path="/" component={HomeContainer} />
        <ProtectedRoute exact path="/myprojects" component={MyProjects}/>
        <ProtectedRoute path ="/start" component={MasterFormContainer}/>
        <HeaderLayout exact path="/learn" component={LearnContainer} />
        <ProtectedRoute exact path="/projects/:userId/:projectId" component={ShowProject}/>
        <ProtectedRoute exact path="/projects/:userId/:projectId/edit" component={EditShowProject}/>
        <AuthRoute path="/login" component={LoginContainer}/> 
        <AuthRoute path="/signup" component={SignUpContainer} /> 
    </Switch>
    </>
};

export default App;
