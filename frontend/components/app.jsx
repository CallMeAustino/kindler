import React from 'react';
import Home from './home/home'
import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute} from '../utils/route_util';

const App = () => {
    return <>
        <Route exact path="/" component={Home}/>
    </>
};

export default App;