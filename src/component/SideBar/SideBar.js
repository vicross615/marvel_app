import {  Link } from 'react-router-dom';

import './SideBar.css'

function SideBar() {
    return (
        <section className='sidebar_wrapper'>
            <Link to={`/reward/dashboard`}>dashboard</Link>
            <Link to={`/reward/content_management`}>content_management</Link>
            <Link to={`/reward/user_Management`}>User_Management</Link>
            <Link to={`/reward/reporting`}>Reporting</Link>
        </section>
    );
}

export default SideBar;

