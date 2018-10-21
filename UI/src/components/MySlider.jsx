import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class GainSlider extends Component {
  state = {
    value: 0
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { scale } = this.props;
    return (
      <div className='Slider-container'>
        <h3 className='Slider-title'>{scale.title}</h3>
        <Slider
          vertical={true}
          min={scale.min}
          max={scale.max}
          value={value}
          onChange={this.handleChange}
          className="rc-Slider"
          trackStyle={{ backgroundColor: 'black' }}
        />
        <p>{value} {scale.unit}</p>
      </div>
    );
  }
}

export default GainSlider;
