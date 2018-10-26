import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
import Controls from './Controls';
import * as api from '../api';
import '../css/Interface.css';

class Interface extends Component {
  state = {
    presets: [],
    currentPreset: null,
    err: null
  };
  render() {
    const { presets, currentPreset } = this.state;
    return (
      <div className="Interface-container">
        <EQPanel
          currentPreset={currentPreset}
          handleGainChange={this.handleGainChange}
          handleFreqChange={this.handleFreqChange}
        />
        <div>
          <PresetList
            presets={presets}
            currentPreset={currentPreset}
            passCurrentPreset={this.passCurrentPreset}
          />
          <Controls recallPresets={this.recallPresets} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.fetchPresets().then(response => {
      if (response.type === 'error') {
        this.setState({
          err: response
        });
      } else {
        this.setState({ presets: response, currentPreset: response[0] });
      }
    });
  }
  passCurrentPreset = preset => {
    this.setState({
      currentPreset: preset
    });
  };
  recallPresets = () => {
    api.fetchPresets().then(response => {
      if (response.type === 'error') {
        this.setState({ err: response });
      } else {
        this.setState({ presets: response, currentPreset: response[0] });
      }
    });
  };
  handleGainChange = (value, band) => {
    let currentPreset = { ...this.state.currentPreset };
    currentPreset[band].gain = value;
    this.setState({
      currentPreset
    });
  };
  handleFreqChange = (value, band) => {
    let currentPreset = { ...this.state.currentPreset };
    let key = band === 'hi_band' || band === 'hi_mid_band' ? 'freq_khz' : 'freq_hz';
    currentPreset[band][key] = band === 'hi_band' || band === 'hi_mid_band' ? Number((value / 1000).toFixed(2)) : value;
    this.setState({
      currentPreset
    });
  };
}

export default Interface;
