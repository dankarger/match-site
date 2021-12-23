import React from "react";
import './Button.css'


export default function Button({ name,callback,icon }) {

    return(
        <div className='Button-div'>
            <button name = {name} onClick={callback}>{icon}</button>
        </div>
    )
}