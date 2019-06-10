import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from "./core/Home";
import Menu from "./core/Menu";
import signup from "./user/Signup";
import signin from "./user/Signin";

const MainRouter = () => (
    <div>
        <Menu></Menu>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={signup}></Route>
            <Route exact path="/signin" component={signin}></Route>

        </Switch>
    </div>
);

export default MainRouter;