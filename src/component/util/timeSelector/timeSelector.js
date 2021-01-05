import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDown } from '@fortawesome/fontawesome-free-solid'

import "./timeSelector.css"
import {getCurrentDate} from './dates'
import {getYesterdayDate} from './dates'


function TimeSelector({ setSelectTime,selectTimeRange}) {

    const timeParameter = ['Today', 'Yesterday']

    const [selectorToggle, setSelectorToggle] = useState(false);
    const [currentSelectedDate, setCurrentSelectedDate]= useState(`Today:${getCurrentDate()} `);
    //

    const setTime = (e) => {
        e.preventDefault()
       //  console.log(document.getElementsByClassName('time_selector').innerHTML)
        toggleTimeSelector()

    };

    const toggleTimeSelector= ()=> {
        setSelectorToggle(!selectorToggle);
    }



    function timeSelector() {
        if(selectorToggle){
            return <div>
                    <div className='time_selector_container'>
                        <div className='time_selector_'>
                            {timeParameter.map((time, i) => {
                                return (
                                <div key={i} className='time_selector' onClick={setTime}>
                                    {time}
                                </div>
                                )
                            })}

                        </div >
                    </div>
                </div>


        }
    }




    return (
        <div className='time_selector_wrapper' >
            <div className='time_selector_toggle_wrapper' onClick={toggleTimeSelector}>
                {/*<span className='time_selector_toggle_day'>*/}
                    {/*{currentSelectedDate}:*/}
                {/*</span>*/}
                <span className='time_selector_toggle_time'>
                    {currentSelectedDate}:
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


