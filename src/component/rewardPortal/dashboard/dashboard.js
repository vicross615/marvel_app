import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCoffee } from '@fortawesome/fontawesome-free-solid'

import TimeSelector from '../../util/timeSelector/timeSelector'

import {  Switch, Link, Route, useHistory } from 'react-router-dom';

import { useTable } from 'react-table';

import {today} from "./data.js";
import {yesterday} from "./data.js";

import logo from './uba_logo.png';
import purple from './purple.png';
import summary_alltime from './summary_alltime.png';

import './dashboard.css'
import {missing , poster1, poster2, poster3, poster4} from "./data.js";



function Dashboard({}) {

    const history = useHistory();

    const [dashboardData, setDashboardData] = useState(today)
    const [summaryDataLogo, setSummaryData] = useState(logo)


    function updateFieldChanged() {
        setSummaryData(purple)
    }
    function selectTimeRange(e) {
        // var timeRange = e.currentTarget.value
        var items = ['Today', 'Yesterday', 'secondDay','thirdDay', 'fourthDay']
        var item = items[Math.floor(Math.random() * items.length)];

        switch (item) {
            case 'Today':
                setDashboardData(today)
                break;
            case 'Yesterday':
                setDashboardData(yesterday)
                break;
        }

    }




    return (
        <section className='dashboard_wrapper'>

            <div className='dashboard_header'>
                <div className='dashboard_header_container'>
                    <span className='dashboard_header_title'>Dashboard</span>

                    <div>
                        <TimeSelector selectTimeRange={selectTimeRange} setDashboardData={setDashboardData} />
                    </div>
                </div>

                <div className='dashboard_search'>
                    <input className='search_input' placeholder='Search' />
                    <FontAwesomeIcon icon={faSearch} className='search_logo' />
                </div>
            </div>

            <div className='dashboard_content'>
                <div className='dashboard_card_container'>
                    {dashboardData.map((postData, key) => {
                        return (
                            <div key={key} className='dashboard_card' style={
                                {borderBottomColor: postData.color}
                            }>
                                <span>{postData.value}</span>
                                <div > {postData.owner} </div>
                                <img src={purple} />
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
                            {/*<button onClick={updateFieldChanged()}>*/}
                                {/*<Link to={`/reward/dashboard/month`}>Month</Link>*/}

                            {/*</button>*/}
                            <button onClick={updateFieldChanged}>
                                <a >All time</a>
                            </button>
                        </div>
                    </div>

                    <div className='dashboard_summary_chart_wrapper'>
                        <img src={summary_alltime} alt="Logo" className="dashboard_summary_chart" />
                    </div>
                </div>
            </div>

        </section>

    );
}
export default Dashboard;

