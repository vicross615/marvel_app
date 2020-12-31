import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDown } from '@fortawesome/fontawesome-free-solid'

import "./timeSelector.css"

function TimeSelector({ setSelectTime}) {

    const timeParameter = ['Today', 'Yesterday']

    const [selectorToggle, setSelectorToggle] = useState(false);


    const setTime = (e) => {
        //setSelectTime(e.event.target)
        //setSelectTime(data.e.target)
        setSelectorToggle(!selectorToggle);
    };

    function timeSelector() {
        if(selectorToggle){
            return <div>
                    <div className='time_selector_container'>

                        <div className='time_selector_'>
                        {timeParameter.map((time) => {
                            return (
                            <div className='time_selector' onClick={setTime}>
                            {time}
                            </div>
                            )
                        })}
                        </div>


                        <div className='time_control'>
                            <button>Apply</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>


        }
    }




    return (
        <div className='time_selector_wrapper' >
            <div className='time_selector_toggle_wrapper' onClick={setTime}>
                <span className='time_selector_toggle_day'>
                    Today:
                </span>
                <span className='time_selector_toggle_time'>
                    20th of Apr
                </span>
                <div className='time_selector_toggle_icon'>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>

            {timeSelector()}
        </div>
    )
}
export default TimeSelector;


