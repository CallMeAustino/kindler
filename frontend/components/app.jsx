import React from 'react';
import HomeContainer from './home/home_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import LearnContainer from './learn/learn_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return <>
    {/* <Switch> */}
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/learn" component={LearnContainer} />
        <AuthRoute path="/login" component={LoginContainer}/> 
        <AuthRoute path="/signup" component={SignUpContainer} /> 
        {/* <Redirect to="/404" /> */}
    {/* </Switch> */}
    </>
};

export default App;