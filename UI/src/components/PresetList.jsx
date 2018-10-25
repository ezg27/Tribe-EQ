import React, { Component } from 'react';
import Controls from './Controls';
import '../css/PresetList.css';

class PresetList extends Component {
  state = {
    presets: [],
    currentPreset: null
  };
  render() {
    const { presets, currentPreset } = this.state;
    return (
      <div>
        <div className="PresetList-container">
          <h3>Preset List</h3>
          <ul className="presets-list">
            {presets.map(preset => {
              return (
                <li key={preset.id}>
                  <div className="list-item" style={currentPreset === preset.id ? { backgroundColor: 'rgb(169, 169, 169)'} : null}>
                    <p>{preset.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Controls />
      </div>
    );
  }
  componentDidMount() {
    const { presets } = this.props;
    this.setState({
      presets,
      // currentPreset: presets[0].id
    });
  }
}

export default PresetList;
