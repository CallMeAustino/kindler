import React from 'react';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute} from '../utils/route_util';

const App = () => {
    return <>
        <Route  path="/" component={NavBarContainer} />
        <Route exact path="/" component={Home}/>
        <AuthRoute path="/login" component={LoginContainer}/>
    </>
};

export default App;