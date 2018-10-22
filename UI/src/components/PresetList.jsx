import React, { Component } from 'react';
import '../css/PresetList.css';

class PresetList extends Component {
  state = {
    presets: [],
    currentPreset: '5bce1038103289cc0d80d8b0'
  };
  render() {
    const { presets } = this.state;
    return (
      <div className="PresetList-container">
        <h3>Preset List</h3>
        <ul className="presets-list">
          {presets.map(preset => {
            return (
              <li key={preset.id}>
                <div className="list-item">
                  <p>{preset.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    const { presets } = this.props;
    this.setState({
      presets
    });
  }
}

export default PresetList;
