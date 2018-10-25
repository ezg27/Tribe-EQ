import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
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
        <PresetList
          presets={presets}
          passCurrentPreset={this.passCurrentPreset}
        />
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
        this.setState({ presets: response });
      }
    });
  }
  passCurrentPreset = preset => {
    this.setState({
      currentPreset: preset
    });
  };
}

export default Interface;
