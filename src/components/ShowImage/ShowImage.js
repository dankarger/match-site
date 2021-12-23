import React from "react";
import {DATA} from "../Api/Api";
import './ShowImage.css'



class ShowImage extends React.Component {


    showImages=()=>{
        const {number} = this.props
        if(number<8) {
            return DATA[number].image
        }
        return DATA[0]

    }

    render() {

        return (
            <div className='ShowImageDiv'>
                <img className='image' src={this.showImages()} alt='gd'/>
                <h3>{DATA[this.props.number].name}</h3>
            </div>
        )
    }
}
export default ShowImage
