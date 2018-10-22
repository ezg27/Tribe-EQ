import React, { Component } from 'react';
import MySlider from './MySlider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class HighMidBand extends Component {
  state = {
    freqVals: {
      title: 'Freq',
      min: 600,
      max: 7000,
      default: 3000,
      unit: 'Hz'
    },
    color: 'rgb(22, 186, 22)'
  };

  render() {
    const { freqVals, color } = this.state;
    const { gainVals } = this.props;
    return (
      <div className="HighMidBand-container">
        <MySlider scale={gainVals} trackColor={color} />
        <MySlider scale={freqVals} trackColor={color} />
      </div>
    );
  }
}

export default HighMidBand;