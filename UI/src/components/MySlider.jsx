import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';
import '../css/Bands.css';

class MySlider extends Component {
  render() {
    const {
      scale,
      trackColor,
      disabled,
      value,
      handleGainChange,
      handleFreqChange,
      band
    } = this.props;
    return (
      <div className="Slider-container">
        <h3 className="Slider-title">{scale.title}</h3>
        <Slider
          vertical={true}
          min={scale.min}
          max={scale.max}
          value={value}
          disabled={!disabled}
          onChange={
            handleGainChange
              ? value => handleGainChange(value, this.props.band)
              : value => handleFreqChange(value, this.props.band)
          }
          className="rc-Slider"
          trackStyle={{ backgroundColor: trackColor }}
          band={band}
        />
        <p>
          {scale.unit === 'kHz' ? (value / 1000).toFixed(2) : scale.unit === 'dB' ? value / 10 : value}{' '}
          {scale.unit}
        </p>
      </div>
    );
  }
}

MySlider.propTypes = {
  scale: PropTypes.object,
  trackColor: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  handleGainChange: PropTypes.func,
  handleFreqChange: PropTypes.func,
  band: PropTypes.string
};

export default MySlider;
