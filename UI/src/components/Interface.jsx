import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
import '../css/Interface.css';

class Interface extends Component {
  render() {
    return (
      <div className='Interface-container'>
        {/* <h1>Hello there</h1> */}
        <EQPanel />
        <PresetList />
      </div>
    );
  }
}

export default Interface;