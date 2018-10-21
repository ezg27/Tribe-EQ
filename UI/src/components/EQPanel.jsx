import React, { Component } from 'react';
import LowBand from './LowBand';
import LowMidBand from './LowMidBand';
import HighMidBand from './HighMidBand';
import HighBand from './HighBand';
import '../css/EQPanel.css';

class EQPanel extends Component {
  state = {
    value: 0
  };
  render() {
    return (
      <div className="EQPanel-container">
        <LowBand />
        <LowMidBand />
        <HighMidBand />
        <HighBand />
      </div>
    );
  }
}

export default EQPanel;
