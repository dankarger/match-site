import React from "react";
import './Counter.css'

export default function Counter({count,icon}) {


    return(
        <div className='Counter'>
            {/*<img src={icon} alt='icon'/>*/}
            <div className='icon'>{icon}</div>
            <div className='count'>{count}</div>
        </div>
    )
}