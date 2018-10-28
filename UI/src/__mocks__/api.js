const fakePresetsData = [
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
  },
  {
    id: '5bd499a033131b15439c693b',
    name: 'Vocal Massage',
    low_band: {
      'on/off': false,
      'peak/shelf': 'peak',
      freq_hz: 108,
      gain: 0
    },
    low_mid_band: {
      'on/off': true,
      hi_low_q: 'hi',
      freq_hz: 290,
      gain: 5
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
      gain: 4
    }
  }
];

const fakePresetByIDData = {
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
};

const fakeCreatedPreset = {
  id: '1',
  name: 'dummy'
}

const fakeDeleteMessage = {
  message: 'Preset deleted!'
};

export const fetchPresets = () => {
  return new Promise(resolve => {
    resolve(fakePresetsData);
  });
};

export const fetchPresetByID = id => {
  return new Promise(resolve => {
    resolve(fakePresetByIDData);
  });
};

export const createPreset = preset => {
  return new Promise(resolve => {
    resolve(fakeCreatedPreset);
  });
};