import {  Link } from 'react-router-dom';
import { useState } from 'react';

import './SideBar.css'
import uba_log from './uba_logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faAngleRight, faUserCog, faAngleDown } from '@fortawesome/fontawesome-free-solid'


function SideBar() {



    const [selectorToggle, setSelectorToggle] = useState(false);

    const toggleItem= ()=> {
        setSelectorToggle(!selectorToggle);
    }

    return (
        <section className='sidebar_wrapper'>
            <div>
                <ul className='sidebar_item_container'>
                    <li className='sidebar_item'>
                        <div className='item_' >
                            <FontAwesomeIcon icon={faColumns}/>
                            <Link className='item_link' to={`/reward/dashboard`}>Dashboard</Link>
                            <span></span>
                        </div>
                    </li>

                    <li className='sidebar_item'>
                        <div  className='item_' onClick={toggleItem}>
                            <FontAwesomeIcon icon={faColumns}/>
                            <span>User Management</span>
                            {selectorToggle ? (
                                <FontAwesomeIcon icon={faAngleDown} />
                            ) : (
                                <FontAwesomeIcon icon={faAngleRight} />
                            )}

                        </div>
                        <div>
                            {selectorToggle ? (
                                <div>
                                    <Link to={`/reward/user_management`} className='item_link' >Users</Link>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </li>
                </ul>
            </div>
            <div style={{position: 'absolute',
                bottom: 0}} >
                <img src={uba_log} style={{width: '200px'}}/>
            </div>
        </section>
    );
}

export default SideBar;

