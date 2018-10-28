import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/PresetList.css';

class PresetList extends Component {
  render() {
    const { currentPreset, passCurrentPreset } = this.props;
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
                    (currentPreset === null && !i) ||
                    currentPreset.id === preset.id
                      ? { backgroundColor: 'rgb(169, 169, 169)' }
                      : null
                  }
                  onClick={() => passCurrentPreset(preset)}
                >
                  <p>{preset.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


PresetList.propTypes = {
  currentPreset: PropTypes.object,
  passCurrentPreset: PropTypes.func
};

export default PresetList;
