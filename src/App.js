import './App.css';

import { Router, Switch, Route } from 'react-router-dom';
import history from './services/history';
// import Routes from './routes/index';


import Reward from "./component/rewardPortal/reward";
import Authentication from "./component/authentication/Authentication";

function App() {
  return (
      <Router history={history}>
          <Switch>
              <Route exact path="/"><Authentication /></Route>
              <Route path="/reward"><Reward /></Route>
              {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
              <Route component={Authentication} />
          </Switch>
      </Router>
  );
}

export default App;
