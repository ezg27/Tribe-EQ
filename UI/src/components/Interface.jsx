import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
import '../css/Interface.css';

class Interface extends Component {
  render() {
    return (
      <div className='Interface-container'>
        <EQPanel />
        <PresetList />
      </div>
    );
  }
}

export default Interface;