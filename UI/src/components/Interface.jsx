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
        <EQPanel currentPreset={currentPreset} />
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
}

export default Interface;
