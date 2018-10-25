import React, { Component } from 'react';
import '../css/PresetList.css';

class Controls extends Component {
  render() {
    return (
      <div className='Controls-container'>
        <button className='Control-button'>Update Preset</button>
        <button className='Control-button'>Create New Preset</button>
        {/* <button className='control-button'></button> */}
      </div>
    );
  }
}

export default Controls;