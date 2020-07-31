import React from 'react';
import HomeContainer from './home/home_container';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import LearnContainer from './learn/learn_container';
import MasterFormContainer from './project/master_form_container';
import HeaderLayout from '../util/header_util'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return <>
    <Switch>
        <ProtectedRoute path ="/start" component={MasterFormContainer} />
        <HeaderLayout exact path="/" component={HomeContainer} />
        <HeaderLayout exact path="/learn" component={LearnContainer} />
        <AuthRoute path="/login" component={LoginContainer}/> 
        <AuthRoute path="/signup" component={SignUpContainer} /> 
    </Switch>
        {/* <Redirect to="/404" /> */}
    </>
};

export default App;

//Old Code im too scared to throw away 

// import NavBarContainer from './nav_bar/nav_bar_container';
// import FooterContainer from './footer/footer_container';
{/* <Route path="/" component={NavBarContainer} /> */}
{/* <Route path="/" component={FooterContainer} /> */}

//currently, I have component routes rendering eachother to bypass the limitation of one invoked 'layout'. Now 
// I am able to render one component at a time, by but adding full "pages" in each rendered container