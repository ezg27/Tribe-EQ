import React, { Component } from 'react';
import MySlider from './MySlider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class LowMidBand extends Component {
  state = {
    freqVals: {
      title: 'Freq',
      min: 200,
      max: 2500,
      default: 500,
      unit: 'Hz'
    },
    color: 'rgb(49, 114, 255)'
  };
  render() {
    const { freqVals, color } = this.state;
    const { gainVals } = this.props;
    return (
      <div className="LowMidBand-container">
        <MySlider scale={gainVals} trackColor={color} />
        <MySlider scale={freqVals} trackColor={color} />
      </div>
    );
  }
}

export default LowMidBand;
