import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/Bands.css';

class LowBand extends Component {
  state = {
    gain: 0,
    freq: 60
  };

  handleGainChange = value => {
    this.setState({ gain: value });
  };

  handleFreqChange = value => {
    this.setState({ freq: value });
  };

  render() {
    const { gain, freq } = this.state;
    return (
      <div className="LowBand-container">
        <Slider
          vertical={true}
          min={-15}
          max={15}
          value={gain}
          onChange={this.handleGainChange}
          className="Slider"
          trackStyle={{ backgroundColor: 'black' }}
        />
        <p>{gain} dB</p>
        <Slider
          vertical={true}
          min={30}
          max={450}
          value={freq}
          onChange={this.handleFreqChange}
          className="Slider"
          trackStyle={{ backgroundColor: 'black' }}
        />
        <p>{freq} Hz</p>
      </div>
    );
  }
}

export default LowBand;
