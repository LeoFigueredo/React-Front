import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from "./core/Home";
import signup from "./user/Signup";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={signup}></Route>

        </Switch>
    </div>
);

export default MainRouter;