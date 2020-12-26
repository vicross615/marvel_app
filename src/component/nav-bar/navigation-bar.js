import './navigation-bar.css'
import reward_logo from './reward_logo.png'
import userPix from './esty.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBell } from '@fortawesome/fontawesome-free-solid'

function NavigationBar() {
    return (
        <section className='navigation_wrapper'>
            <div className="">
                <img src={reward_logo} alt="reward_logo" className="reward_logo" />
            </div>


            <div className="nav_user_block">
                <div className="">
                    <FontAwesomeIcon icon={faAngleRight} className='login_button_icon'/>
                </div>
                <div className="">
                    <img src={userPix} alt="userPix" className="userPix" />
                </div>
            </div>
        </section>

    );
}

export default NavigationBar;