import './App.css';
import { Helmet } from 'react-helmet'

import Reward from "./component/rewardPortal/reward";
import Authentication from "./component/authentication/Authentication";

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    const TITLE = 'Marvel App'

    return (
        <Router >

                <Helmet>
                    <title>{ TITLE }</title>
                    <link rel="icon" type="image/png" href="purple.png" sizes="16x16" />
                </Helmet>
                <Switch>
                    <Route exact path="/"><Authentication /></Route>
                    <Route path="/reward"><Reward /></Route>
                    {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
                    <Route component={Authentication} />
                </Switch>

        </Router>
    );
}