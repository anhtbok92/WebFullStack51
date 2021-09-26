import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from "./navBar";
import About from "./About";
import Users from "./Users";
import Home from "./Home";

const ReactRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouter;