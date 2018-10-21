import React, { Component } from 'react';
import MySlider from './MySlider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class LowBand extends Component {
  state = {
    gainVals: {
      title: 'Gain',
      min: -15,
      max: 15,
      unit: 'dB'
    },
    freqVals: {
      title: 'Freq',
      min: 30,
      max: 450,
      unit: 'Hz'
    }
  };

  render() {
    const { gainVals, freqVals } = this.state;
    return (
      <div className="LowBand-container">
        <MySlider scale={gainVals} />
        <MySlider scale={freqVals} />
      </div>
    );
  }
}

export default LowBand;
