import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCoffee } from '@fortawesome/fontawesome-free-solid'

import {  Switch, Link, Route, useHistory } from 'react-router-dom';

import { useTable } from 'react-table';

import data from "./data.json";

import logo from './uba_logo.png';

import './dashboard.css'


function Dashboard() {

    const history = useHistory();


    function handleClick() {
        history.push("/reward/reporting");
    }




    return (
        <section className='dashboard_wrapper'>

            <div className='dashboard_header'>
                <div className='dashboard_header_container'>
                    <span classname='dashboard_header_title'>Dashboard</span>
                    <div>TIME SELECTOR HERE</div>
                </div>

                <div className='dashboard_search'>
                    <input className='search_input' placeholder='Search' />
                    <FontAwesomeIcon icon={faSearch} className='search_logo' />
                </div>
            </div>

            <div className='dashboard_content'>
                <div className='dashboard_card_container'>
                    {data.map((postData, key) => {
                        console.log(postData);
                        return (
                            <div key={key} className='dashboard_card' style={
                                {borderBottomColor: postData.color}
                            }>
                                <span>{postData.value}</span>
                                <div > {postData.owner} </div>
                                <img src={postData.indicator} />
                            </div>
                        );
                    })}
                </div>

                <div className='dashboard_summary'>
                    <div className='dashboard_summary_content'>
                        <span>Summary</span>
                        <div style={
                            {display: 'flex'}
                        }>
                            <button onClick={handleClick}>
                                <Link to={`/reward/dashboard/month`}>Month</Link>

                            </button>
                            <button onClick={handleClick}>
                                <Link to={`/reward/dashboard/all_time`}>All time</Link>

                            </button>
                        </div>
                    </div>

                    <div>
                        <Switch>
                            <Route  path={`/reward/dashboard/month`} exact component={Month}/>
                            <Route path={`/reward/dashboard/all_time`} exact component={AllTime}/>
                            <Route />
                        </Switch>
                    </div>
                </div>
            </div>

        </section>

    );
}

export const Month = ()=> (
    <div>
        <div>
            Lore Ipsum
        </div>
        <img src={logo} alt="Logo" className="form_header_logo" />
    </div>
);



export const AllTime = ()=> (
    <div>
        <div>
            Lore Ipsum
        </div>
        <img src={logo} alt="Logo" className="form_header_logo" />
    </div>
);
export default Dashboard;

