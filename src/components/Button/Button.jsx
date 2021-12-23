import React from "react";
import './Button.css'


export default function Button({ name,callback,icon,className }) {

    return(
        <div className='Button-div'>
            <button className={className} name = {name} onClick={callback}>{icon}</button>
        </div>
    )
}