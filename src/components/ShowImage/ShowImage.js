import React from "react";


export default function ShowImage({image}) {

    return (
        <div className='ShowImageDiv'>
            <img className='image' src={image} alt="image"/>

        </div>
    )

}