import React from 'react'
import {FiPhoneMissed,FiChevronRight} from "react-icons/fi";

const styles = {
    top: "2rem",
    position:"relative",
}

// import {  } from "react-icons/io5";
const Button = propse => {
    return (
        <div className='dash_item sip flex justify-between' id={propse.id}>
            <div className="icon_item float-left">
                {propse.ico}                        
            </div>
            <div className="icon_mad">
                <span className="icon_head block mt-2 pt-2 ">{propse.icon_head}</span>
                <span className="icon_money block mt-2">{propse.icon_money}</span>
            </div>
            <div className="kingu" style={styles}>
                <span className="text-xl font-semibold no block"><FiChevronRight /></span>
            </div>
        </div>
    )
}

export default Button
