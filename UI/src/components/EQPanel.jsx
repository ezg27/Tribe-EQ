import React, { Component } from 'react';
import Band from './Band';
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
    },
    freqVals: [
      {
        title: 'Freq',
        min: 30,
        max: 450,
        default: 60,
        unit: 'Hz',
        color: 'rgb(60, 60, 60)'
      },
      {
        title: 'Freq',
        min: 200,
        max: 2500,
        default: 500,
        unit: 'Hz',
        color: 'rgb(49, 114, 255)'
      },
      {
        title: 'Freq',
        min: 600,
        max: 7000,
        default: 3000,
        unit: 'kHz',
        color: 'rgb(22, 186, 22)'
      },
      {
        title: 'Freq',
        min: 1500,
        max: 16000,
        default: 8000,
        unit: 'kHz',
        color: 'rgb(222, 59, 59)'
      }
    ]
  };
  render() {
    const { gainVals, freqVals } = this.state;
    return (
      <div className="EQPanel-container">
        {freqVals.map((band, i) => {
          return (
            <Band
              gainVals={gainVals}
              freqVals={band}
              style={{ gridColumn: i + 1 }}
            />
          );
        })}
      </div>
    );
  }
}

export default EQPanel;
