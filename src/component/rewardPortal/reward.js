import Dashboard from './dashboard/dashboard';
import NavigationBar from '../util/nav-bar/navigation-bar'
import Sidebar from '../util/SideBar/SideBar';

// import ContentManagement from './contentManagement/contentManagement';
import UserManagement from './userManagement/userManagement'
import Reporting from './reporting/reporting'

import './reward.css'




import {  Switch, Link, Route,  useParams, useRouteMatch } from 'react-router-dom';

function Reward() {

    let { path, url } = useRouteMatch();
    let { rewardId } = useParams();
    console.log(rewardId)

    return (
        <section className='reward_wrapper'>
            <NavigationBar />
            <section className='reward_content_wrapper'>
                <Sidebar />
                <div className='reward_content'>

                    <Switch>
                        <Route path={`${path}/:rewardsId`}>
                            <Rewards />
                        </Route>
                    </Switch>
                </div>
            </section>

        </section>

    );
}

export default Reward;


function Rewards() {
    let { rewardsId } = useParams();

    return (
        <>
            {rewardsId === 'user_management' ? (
                <UserManagement  />

            ) : (
                <>
                    {/*<Dashboard  />*/}
                    <UserManagement  />
                </>
            )}
        </>
    );
}