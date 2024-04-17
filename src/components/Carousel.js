import React, { useState } from "react";

import './Carousel.css'
import MyButton from "./UI/MyButton";
import right from "../media/images/right.png";
import left from "../media/images/left.png";
import ImageBox from "./UI/imageBox/ImageBox.js";



function Carousel(props) {
    const [direction, setDirection] = useState('')
  function showNext() {
    switch(props.currentIndex) {
      case (props.carouselImages.length-1):
        props.updateIndex(0);
        break;
      default:
        props.updateIndex(props.currentIndex+1);
        break;
    } 
    direction === 'slideInLeft'?setDirection('slideInLeft1'):setDirection('slideInLeft')
  }

  function showPrevious() {
    switch(props.currentIndex) {
     case (0):
        props.updateIndex(props.carouselImages.length-1);
        break;
      default:
        props.updateIndex(props.currentIndex-1);
        break;
    }
    direction === 'slideInRight'?setDirection('slideInRight1'):setDirection('slideInRight')
    
  }

  const [isTouchMove, setTouchMove] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);

  const touchStartEvent = (event) =>{
    setStartTouch(event.changedTouches[0].clientX)
  }
  const touchMoveEvent = () =>{
    setTouchMove(1)
  }
  const touchEndEvent = (event) =>{
    setEndTouch(event.changedTouches[0].clientX)
    if (isTouchMove) {
      startTouch < endTouch ? showNext() : showPrevious()
    }
    setTouchMove(0)
  }
  
    return (
    <div className="carousel"
    onTouchStart={touchStartEvent}
    onTouchMove={touchMoveEvent}
    onTouchEnd={touchEndEvent}
    >
        <div className="carouselBox">
            <div className="textBox">
              <div className="description">
                {props.carouselImages[props.currentIndex].description}
              </div>
              <div className="ButtonsBox">
              <MyButton onClick={showPrevious}><img src={left} alt="<-" style={{height: "30px"}}/></MyButton>
              <div style={{fontSize: '40px', color: 'gray'}}>|</div>
              <MyButton onClick={showNext}><img src={right} alt="->" style={{height: "30px"}}/></MyButton>
              </div>
            </div>

            <ImageBox 
            className={direction} 
            currentImg={props.carouselImages[props.currentIndex]}
            />
        </div>
    </div>
    );
    }
  
export default Carousel;