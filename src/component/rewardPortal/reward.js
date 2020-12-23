import Dashboard from './dashboard/dashboard';
// import ContentManagement from './ontentManagement/contentManagement';
// import UserManagement from './userManagement/userManagement'
// import Reporting from './reporting/reporting'




import {  Switch, Link, Route, Router } from 'react-router-dom';

function Reward() {
    return (
        <section>
            <div>
                SENSEI
            </div>
            <Link to={`/reward/dashboard`}>dashboard</Link>
            <Link to={`/reward/content_management`}>content_management</Link>
            <Link to={`/reward/user_Management`}>User_Management</Link>
            <Link to={`/reward/reporting`}>Reporting</Link>

            {/*<Router>*/}
            <Switch>
                <Route path={`/reward/dashboard`} component={Dashboard}/>
                {/*<Route path={`/reward/content_management`} component={ContentManagement}/>*/}
                {/*<Route path={`/reward/user_management`} component={UserManagement}/>*/}
                {/*<Route path={`/reward/reporting`} component={Reporting}/>*/}
            </Switch>
            {/*</Router>*/}
        </section>

    );
}

export default Reward;