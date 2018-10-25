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
  // componentDidUpdate(prevProps) {
  //   const { presets } = this.props;
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       presets: presets
  //     });
  //   }
  // }
  setCurrentPreset = preset => {
    this.setState({
      currentPreset: preset
    });
  };
}

export default PresetList;
