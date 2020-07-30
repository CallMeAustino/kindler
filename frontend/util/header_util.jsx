import React from "react"
import { Route } from "react-router-dom"
import NavBarContainer from "../components/nav_bar/nav_bar_container";
import FooterContainer from '../components/footer/footer_container';

const HeaderLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <>
            <NavBarContainer />
            <Component {...props} />
            <FooterContainer />
        </>
    )} />
)

export default HeaderLayout;