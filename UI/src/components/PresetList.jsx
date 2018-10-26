import React, { Component } from 'react';
import '../css/PresetList.css';

class PresetList extends Component {
  state = {
    presets: [],
    currentPreset: null
  };
  render() {
    const { currentPreset } = this.state;
    return (
      <div className="PresetList-container">
        <h3>Preset List</h3>
        <ul className="presets-list">
          {this.props.presets.map((preset, i) => {
            return (
              <li key={preset.id}>
                <div
                  className="list-item"
                  style={
                    (currentPreset === null && !i) || currentPreset === preset
                      ? { backgroundColor: 'rgb(169, 169, 169)' }
                      : null
                  }
                  onClick={() => this.setCurrentPreset(preset)}
                >
                  <span style={{ float: 'right' }}>X</span>
                  <p>{preset.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    const { currentPreset } = this.props;
    if (prevProps.currentPreset !== this.props.currentPreset) {
      this.setState({
        currentPreset
      });
    }
  }
  setCurrentPreset = preset => {
    this.props.passCurrentPreset(preset);
    this.setState({
      currentPreset: preset
    });
  };
}

export default PresetList;
