import React, { Component } from 'react';
import Band from './Band';
import '../css/EQPanel.css';

class EQPanel extends Component {
  state = {
    gainDefs: {
      title: 'Gain',
      min: -150,
      max: 150,
      default: 0,
      unit: 'dB'
    },
    freqDefs: [
      {
        title: 'Freq',
        band: 'low_band',
        min: 30,
        max: 450,
        default: 60,
        unit: 'Hz',
        color: 'rgb(60, 60, 60)'
      },
      {
        title: 'Freq',
        band: 'low_mid_band',
        min: 200,
        max: 2500,
        default: 500,
        unit: 'Hz',
        color: 'rgb(49, 114, 255)'
      },
      {
        title: 'Freq',
        band: 'hi_mid_band',
        min: 600,
        max: 7000,
        default: 3000,
        unit: 'kHz',
        color: 'rgb(22, 186, 22)'
      },
      {
        title: 'Freq',
        band: 'hi_band',
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
    const {
      currentPreset,
      handleGainChange,
      handleFreqChange,
      handleOnOffChange,
      handleEQSwitchChange
    } = this.props;
    const bands = !currentPreset
      ? null
      : [
          currentPreset.low_band,
          currentPreset.low_mid_band,
          currentPreset.hi_mid_band,
          currentPreset.hi_band
        ];
    return (
      <div className="EQPanel-container">
        {freqDefs.map((band, i) => {
          return (
            <Band
              key={i}
              gainDefs={gainDefs}
              freqDefs={band}
              style={{ gridColumn: i + 1 }}
              bandVals={!currentPreset ? null : bands[i]}
              handleGainChange={handleGainChange}
              handleFreqChange={handleFreqChange}
              handleOnOffChange={handleOnOffChange}
              handleEQSwitchChange={handleEQSwitchChange}
            />
          );
        })}
      </div>
    );
  }
}

export default EQPanel;
