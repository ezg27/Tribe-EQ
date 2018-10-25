import React, { Component } from 'react';
import Band from './Band';
import '../css/EQPanel.css';

class EQPanel extends Component {
  state = {
    value: 0,
    gainDefs: {
      title: 'Gain',
      min: -15,
      max: 15,
      default: 0,
      unit: 'dB'
    },
    freqDefs: [
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
    const { gainDefs, freqDefs } = this.state;
    const { currentPreset } = this.props;
    const bands = !currentPreset ? null : [currentPreset.low_band, currentPreset.low_mid_band, currentPreset.high_mid_band, currentPreset.high_band];
    return (
      <div className="EQPanel-container">
        {freqDefs.map((band, i) => {
          return (
            <Band
              gainDefs={gainDefs}
              freqDefs={band}
              style={{ gridColumn: i + 1 }}
              bandVals={!currentPreset ? null : bands[i]}
            />
          );
        })}
      </div>
    );
  }
  componentDidUpdate(prevProps) {}
}

export default EQPanel;
