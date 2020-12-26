import Dashboard from './dashboard/dashboard';
import NavigationBar from '../nav-bar/navigation-bar'
import Sidebar from '../SideBar/SideBar';

//import ContentManagement from './contentManagement/contentManagement';
import UserManagement from './userManagement/userManagement'
import Reporting from './reporting/reporting'

import './reward.css'




import {  Switch, Link, Route, Router } from 'react-router-dom';

function Reward() {
    return (
        <section className='reward_wrapper'>
            <NavigationBar />
            <section className='reward_content_wrapper'>
                <Sidebar />
                <div className='reward_content'>
                    <Switch>
                        <Route  path={`/reward/dashboard`} exact component={Dashboard}/>
                        {/*<Route path={`/reward/content_management`} component={ContentManagement}/>*/}
                        <Route path={`/reward/user_management`} component={UserManagement}/>
                        <Route path={`/reward/reporting`}  exact component={Reporting}/>
                        <Route />
                    </Switch>
                </div>
            </section>

        </section>

    );
}

export default Reward;