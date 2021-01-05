import './App.css';



import Reward from "./component/rewardPortal/reward";
import Authentication from "./component/authentication/Authentication";

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Dashboard from "./component/rewardPortal/dashboard/dashboard";

export default function App() {
    return (
        <Router >
            <Switch>
                <Route exact path="/"><Authentication /></Route>

                <Route path="/reward"><Reward /></Route>
                {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
                <Route component={Authentication} />
            </Switch>
        </Router>
    );
}




{/*<Router>*/}
    {/*<div>*/}
        {/*<Switch>*/}
            {/*<Route path="/">*/}
                {/*<Reward />*/}
            {/*</Route>*/}
        {/*</Switch>*/}
    {/*</div>*/}
{/*</Router>*/}