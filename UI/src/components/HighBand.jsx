import React, { Component } from 'react';
import MySlider from './MySlider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class HighBand extends Component {
  state = {
    freqVals: {
      title: 'Freq',
      min: 1500,
      max: 16000,
      default: 8000,
      unit: 'Hz'
    },
    color: 'rgb(222, 59, 59)'
  };

  render() {
    const { freqVals, color } = this.state;
    const { gainVals } = this.props;
    return (
      <div className="HighBand-container">
        <MySlider scale={gainVals} trackColor={color} />
        <MySlider scale={freqVals} trackColor={color} />
      </div>
    );
  }
}

export default HighBand;
