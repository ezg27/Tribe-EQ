import React, { Component } from 'react';
import EQPanel from './EQPanel';
import PresetList from './PresetList';
import '../css/Interface.css';

class Interface extends Component {
  state = {
    presets: [
      {
        id: '5bce1038103289cc0d80d8ad',
        name: 'INIT',
        low_band: {
          'on/off': true,
          'peak/shelf': 'peak',
          freq_hz: 60,
          gain: 0
        },
        low_mid_band: {
          'on/off': true,
          hi_low_q: 'low',
          freq_hz: 500,
          gain: 0
        },
        hi_mid_band: {
          'on/off': true,
          hi_low_q: 'low',
          freq_khz: 3.0,
          gain: 0
        },
        hi_band: {
          'on/off': true,
          'peak/shelf': 'peak',
          freq_khz: 8.0,
          gain: 0
        }
      },
      {
        id: '5bce1038103289cc0d80d8ae',
        name: 'Vocal Massage',
        low_band: {
          'on/off': false,
          'peak/shelf': 'peak',
          freq_hz: 108,
          gain: 4.0
        },
        low_mid_band: {
          'on/off': true,
          hi_low_q: 'hi',
          freq_hz: 290,
          gain: -4.1
        },
        hi_mid_band: {
          'on/off': true,
          hi_low_q: 'low',
          freq_khz: 2.41,
          gain: 2.2
        },
        hi_band: {
          'on/off': true,
          'peak/shelf': 'peak',
          freq_khz: 6.04,
          gain: 4.0
        }
      },
      {
        id: '5bce1038103289cc0d80d8af',
        name: 'Kick Booster',
        low_band: {
          'on/off': true,
          'peak/shelf': 'shelf',
          freq_hz: 112,
          gain: 5.4
        },
        low_mid_band: {
          'on/off': true,
          hi_low_q: 'hi',
          freq_hz: 362,
          gain: -4.3
        },
        hi_mid_band: {
          'on/off': true,
          hi_low_q: 'low',
          freq_khz: 3.24,
          gain: 1.9
        },
        hi_band: {
          'on/off': true,
          'peak/shelf': 'peak',
          freq_khz: 8.01,
          gain: 6.0
        }
      },
      {
        id: '5bce1038103289cc0d80d8b0',
        name: 'Snare Bump',
        low_band: {
          'on/off': true,
          'peak/shelf': 'peak',
          freq_hz: 203,
          gain: 7.1
        },
        low_mid_band: {
          'on/off': true,
          hi_low_q: 'low',
          freq_hz: 595,
          gain: -4.3
        },
        hi_mid_band: {
          'on/off': true,
          hi_low_q: 'low',
          freq_khz: 2.78,
          gain: 4.2
        },
        hi_band: {
          'on/off': true,
          'peak/shelf': 'peak',
          freq_khz: 7.65,
          gain: 5.8
        }
      }
    ]
  };
  render() {
    const { presets } = this.state;
    return (
      <div className="Interface-container">
        <EQPanel />
        <PresetList presets={presets} />
      </div>
    );
  }
}

export default Interface;
