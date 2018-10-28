import React from 'react';
import { shallow } from 'enzyme';
import PresetList from '../PresetList';

const presets = [
  {
    id: '5bd499a033131b15439c693a',
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
      freq_khz: 3,
      gain: 0
    },
    hi_band: {
      'on/off': true,
      'peak/shelf': 'peak',
      freq_khz: 8,
      gain: 0
    }
  }
];

const currentPreset = presets[0];

it('renders without crashing', () => {
  shallow(<PresetList presets={presets} currentPreset={currentPreset} />);
});
