import React from 'react';
import MySlider from './MySlider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

const Band = ({ gainVals, freqVals }) => {
  return (
    <div className="Band-container">
      <MySlider scale={gainVals} trackColor={freqVals.color} />
      <MySlider scale={freqVals} trackColor={freqVals.color} />
    </div>
  );
};

export default Band;
