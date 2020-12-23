import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Reward from "../component/rewardPortal/reward";
import Authentication from "../component/authentication/Authentication";



export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Authentication} />
            <Route path="/reward" component={Reward} isPrivate />
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={Authentication} />
        </Switch>
    );
}