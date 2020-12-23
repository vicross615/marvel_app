import './authentication.css'
import logo from './uba_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCoffee } from '@fortawesome/fontawesome-free-solid'

function Authentication() {
    return (
        <section className="authentication_wrapper">
            <form className="form_wrapper">
                <header className="form_wrapper_header">
                    <span className="form_header_signing">
                        Sign In
                    </span>
                    <div className="">
                        <img src={logo} alt="Logo" className="form_header_logo" />
                    </div>
                </header>

                <div className="form_">
                    <section className="form_group" >
                        <section className="form_detail">
                            <label className="form_detail_label">
                                Email
                            </label>
                            <input className="form_input"/>
                        </section>

                        <section className="form_detail">
                            <label  className="form_detail_label">
                                Password
                            </label>
                            <input className="form_input"/>
                        </section>

                        <span className="forgot_password">
                            <a>Forgot your password</a>
                        </span>

                        <button className='login_button'>
                            <span className='login_button_text'>LOGIN</span>
                            <FontAwesomeIcon icon={faAngleRight} className='login_button_icon'/>
                        </button>
                    </section>


                    <section className='request_access'>
                        <label className='dont_have_account'>
                            Dont have an account?
                        </label>
                        <button className='request_access_button' >
                            <span>Request For Access</span>
                            <FontAwesomeIcon icon={faCoffee} />
                        </button>
                    </section>
                </div>
            </form>
        </section>


    );
}

export default Authentication;