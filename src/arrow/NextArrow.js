import React, { Component } from 'react';
import './NextArrow.scss';
import rightarrow from '../images/rightarrow.png'
class NextArrow extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className='nextArrowBox' onClick={onClick}>
        <img
          src={rightarrow}
          className='nextArrow'
          alt='arrow next'
        />
      </div>
    );
  }
}

export default NextArrow;