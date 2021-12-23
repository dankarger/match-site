import React from "react";
import {DATA} from "../Api/Api";
import './ShowImage.css'



class ShowImage extends React.Component {


    showImages=()=>{
        const {number, imageList, total} = this.props
        if(number<9) {
            return DATA[number].image
        }
        return DATA[0]

    }

    render() {

        return (
            <div className='ShowImageDiv'>
                <img className='image' src={this.showImages()} alt='gd'/>

            </div>
        )
    }
}
export default ShowImage
