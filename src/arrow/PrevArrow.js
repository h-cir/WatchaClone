import React, { Component } from 'react';
import './PrevArrow.scss';
import leftarrow from '../images/leftarrow.png'


const PrevArrow = () => {
  return (
    <div className='prevArrowBox'>
      <img
        src={leftarrow}
        className='prevArrow'
        alt='arrow next'
      />
    </div>
  )
}

export default PrevArrow;