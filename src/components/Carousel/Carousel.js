import React, { useState } from "react";

import './Carousel.css'
import MyButton from "../UI/MyButton/MyButton";
import ImageBox from "../UI/imageBox/ImageBox.js";



function Carousel(props) {
    const [direction, setDirection] = useState('')
  function showNext() {
    props.updateIndex(props.currentIndex === props.carouselImages.length-1?0:props.currentIndex+1)
    setDirection(direction === 'slideInLeft'?'slideInLeft1':'slideInLeft')
  }

  function showPrevious() {
    props.updateIndex(props.currentIndex === 0? props.carouselImages.length-1: props.currentIndex-1)
    setDirection(direction === 'slideInRight'?'slideInRight1':'slideInRight')  
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
              <MyButton className="button-left" onClick={showPrevious}></MyButton>
              <div style={{fontSize: '40px', color: 'gray'}}>|</div>
              <MyButton className="button-right" onClick={showNext}></MyButton>
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