import React, { Component } from 'react';
import './NextArrow.scss';
import rightarrow from '../images/rightarrow.png'

const NextArrow = () => {
  
  return (
    <div className='nextArrowBox'>
        <img
          src={rightarrow}
          className='nextArrow'
          alt='arrow next'
        />
      </div>
  )
}

export default NextArrow;