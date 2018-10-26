import React, { Component } from 'react';
import * as api from '../api';
import '../css/PresetList.css';

class Controls extends Component {
  render() {
    return (
      <div className="Controls-container">
        <button className="Control-button" onClick={this.handleUpdate}>
          Update Preset
        </button>
        <button className="Control-button" onClick={this.handleCreate}>
          Create New Preset
        </button>
        <button className="Control-button" onClick={this.handleDelete}>
          Delete Current Preset
        </button>
      </div>
    );
  }
  handleUpdate = () => {
    const { currentPreset } = this.props;
    api.updatePreset(currentPreset).then(response => {
      console.log(response);
    });
  };
  handleDelete = () => {
    const { currentPreset, recallPresets } = this.props;
    api.deletePreset(currentPreset.id).then(response => {
      console.log(response);
      recallPresets();
    });
  };
}

export default Controls;
