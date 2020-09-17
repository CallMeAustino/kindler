import React from 'react';
import HomeContainer from './home/home_container';
import ArtContainer from './categories/art/art_container';
import ComicsContainer from './categories/comics-illustration/comics_container';
import DesignContainer from './categories/design-tech/design_container';
import FilmContainer from './categories/film/film_container';
import FoodContainer from './categories/food-craft/food_container';
import GamesContainer from './categories/games/games_container';
import MusicContainer from './categories/music/music_container';
import PublishingContainer from './categories/publishing/publishing_container';
import ExploreContainer from './explore/explore_container';
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
        <HeaderLayout exact path="/arts" component={ArtContainer} />
        <HeaderLayout exact path="/comics-illustration" component={ComicsContainer} />
        <HeaderLayout exact path="/design-tech" component={DesignContainer} />
        <HeaderLayout exact path="/film" component={FilmContainer} />
        <HeaderLayout exact path="/food-craft" component={FoodContainer} />
        <HeaderLayout exact path="/games" component={GamesContainer} />
        <HeaderLayout exact path="/music" component={MusicContainer} />
        <HeaderLayout exact path="/publishing" component={PublishingContainer} />
        <HeaderLayout exact path="/explore" component={ExploreContainer} />
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
