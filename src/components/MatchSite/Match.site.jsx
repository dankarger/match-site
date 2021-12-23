import React,  {useState} from "react";
import Counter from "../Counter/Counter";
import './MatchSite.css'
import Button from "../Button/Button";
import ShowImage from "../ShowImage/ShowImage";

const icons = {
    plus: <i className="fas fa-check-circle"></i> ,
    minus: <i className="fas fa-minus-circle"></i>
}



export default class MatchSite extends React.Component{
   state = {
        countPlus:0,
        countMinus:0
    }

    handlePlusButton =()=>{
       this.setState((prev)=>{
           return {countPlus:prev.countPlus + 1}
       })
        this.nextImage()
    }
     handleMinusButton =()=>{
         this.setState((prev)=>{
             return {countMinus:prev.countMinus + 1}
         })

         this.nextImage()
    }

    nextImage=()=>{

       console.log('next')
    }

    render(){
    return (
        <div>
            <div className='Matching-content'>
                <h1>Matching Site</h1>
                <div className="Counters-div">
                    <Counter icon={icons.plus} count={this.state.countPlus}/>
                    <Counter icon={icons.minus} count={this.state.countMinus}/>
                </div>
                <ShowImage image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
                <div className="Buttons-div">
                    <Button callback={this.handlePlusButton} name={'Plus'} icon={icons.plus}/>
                    <Button callback={this.handleMinusButton} name={'Minus'} icon={icons.minus}/>
                </div>

            </div>

        </div>
    )
}
}