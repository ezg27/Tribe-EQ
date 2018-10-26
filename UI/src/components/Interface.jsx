import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
import Controls from './Controls';
import Loading from './Loading';
import * as api from '../api';
import '../css/Interface.css';

class Interface extends Component {
  state = {
    presets: [],
    currentPreset: null,
    loading: false,
    err: null
  };
  render() {
    const { presets, currentPreset, loading } = this.state;
    return (
      <div className="Interface-container">
        <EQPanel
          currentPreset={currentPreset}
          handleGainChange={this.handleGainChange}
          handleFreqChange={this.handleFreqChange}
          handleOnOffChange={this.handleOnOffChange}
          handleEQSwitchChange={this.handleEQSwitchChange}
        />
        <div>
          {loading ? (
            <Loading />
          ) : (
            <PresetList
              presets={presets}
              currentPreset={currentPreset}
              passCurrentPreset={this.passCurrentPreset}
            />
          )}
          <Controls
            recallPresets={this.recallPresets}
            currentPreset={currentPreset}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.fetchPresets().then(response => {
      this.setState({ presets: response, currentPreset: response[0] });
    });
  }

  passCurrentPreset = preset => {
    this.setState({ loading: true });
    api.fetchPresets().then(response => {
      this.setState({
        presets: response,
        currentPreset: preset,
        loading: false
      });
    });
  };

  recallPresets = () => {
    this.setState({
      loading: true
    });
    api.fetchPresets().then(response => {
      this.setState({
        presets: response,
        currentPreset: response[0],
        loading: false
      });
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
    let key =
      band === 'hi_band' || band === 'hi_mid_band' ? 'freq_khz' : 'freq_hz';
    currentPreset[band][key] =
      band === 'hi_band' || band === 'hi_mid_band'
        ? Number((value / 1000).toFixed(2))
        : value;
    this.setState({
      currentPreset
    });
  };

  handleOnOffChange = (checked, band) => {
    let currentPreset = { ...this.state.currentPreset };
    currentPreset[band]['on/off'] = checked;
    this.setState({ currentPreset });
  };

  handleEQSwitchChange = (checked, band) => {
    let currentPreset = { ...this.state.currentPreset };
    const parameter =
      band === 'low_band' || band === 'hi_band' ? 'peak/shelf' : 'hi_low_q';
    currentPreset[band][parameter] =
      (band === 'low_band' || band === 'hi_band') && checked
        ? 'shelf'
        : (band === 'low_band' || band === 'hi_band') && !checked
          ? 'peak'
          : (band === 'low_mid_band' || band === 'hi_mid_band') && checked
            ? 'low'
            : 'hi';
    this.setState({ currentPreset });
  };
}

export default Interface;
