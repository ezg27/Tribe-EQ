import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
import * as api from '../api';
import '../css/Interface.css';

class Interface extends Component {
  state = {
    presets: [],
    err: null
  };
  render() {
    const { presets } = this.state;
    return (
      <div className="Interface-container">
        <EQPanel />
        <PresetList presets={presets} />
      </div>
    );
  }
  componentDidMount() {
    api.fetchPresets().then(response => {
      if (response.type === 'error') {
        this.setState({
          err: response
        })
      } else {
        this.setState({ presets: response })
      }
    })
  }
}

export default Interface;
