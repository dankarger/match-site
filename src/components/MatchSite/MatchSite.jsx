import React from "react";
import Counter from "../Counter/Counter";
import './MatchSite.css'
import Button from "../Button/Button";
import ShowImage from "../ShowImage/ShowImage";
import {DATA} from "../Api/Api";


const icons = {
    plus: <i className="fas fa-check-circle"></i> ,
    minus: <i className="fas fa-minus-circle"></i>
}



export default class MatchSite extends React.Component{
   state = {
        countPlus:0,
        countMinus:0,
       imagesList:[],
       numberOfImage:0
    }

    componentDidMount() {
        const data=DATA
        this.setState({imagesList:data},()=>{console.log('dsdsd',data)})

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if(this.state.numberOfImage>=DATA.length){
           this.setState({numberOfImage:0})
       }
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
        this.setState((prev)=>{
            return {numberOfImage:prev.numberOfImage + 1}
        })
       console.log('ds',this.state.numberOfImage)
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
                <ShowImage imageList={this.state.imagesList} number={this.state.numberOfImage} total={10}/>
                <div className="Buttons-div">
                    <Button callback={this.handlePlusButton} name={'Plus'} icon={icons.plus}/>
                    <Button callback={this.handleMinusButton} name={'Minus'} icon={icons.minus}/>
                </div>

            </div>

        </div>
    )
}
}