import React, { Component } from 'react';
import './PrevArrow.scss';
import leftarrow from '../images/leftarrow.png'
class PrevArrow extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className='prevArrowBox' onClick={onClick}>
        <img
          src={leftarrow}
          className='prevArrow'
          alt='arrow next'
        />
      </div>
    );
  }
}

export default PrevArrow;