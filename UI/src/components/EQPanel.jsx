import React, { Component } from 'react';
import LowBand from './LowBand';
import LowMidBand from './LowMidBand';
import HighMidBand from './HighMidBand';
import HighBand from './HighBand';
import '../css/EQPanel.css';

class EQPanel extends Component {
  state = {
    value: 0,
    gainVals: {
      title: 'Gain',
      min: -15,
      max: 15,
      default: 0,
      unit: 'dB'
    }
  };
  render() {
    const { gainVals } = this.state;
    return (
      <div className="EQPanel-container">
        <LowBand gainVals={gainVals} />
        <LowMidBand gainVals={gainVals} />
        <HighMidBand gainVals={gainVals} />
        <HighBand gainVals={gainVals} />
      </div>
    );
  }
}

export default EQPanel;
