import * as api from '../api';
jest.mock('../api');

const id = '5bd499a033131b15439c693a';

const preset = {
  name: 'dummy'
};

describe('fetchPresets', () => {
  it('returns array of presets', () => {
    expect.assertions(2);
    return api.fetchPresets().then(data => {
      expect(Array.isArray(data)).toBe(true);
      expect(data).toHaveLength(2);
    });
  });
  it('returns valid preset data objects', () => {
    expect.assertions(2);
    return api.fetchPresets().then(data => {
      expect(data[0].name).toBe('INIT');
      expect(data[1].low_band.freq_hz).toBe(108);
    });
  });
});

describe('fetchPresetByID', () => {
  it('returns corresponding preset for passed ID', () => {
    return api.fetchPresetByID(id).then(data => {
      expect.assertions(3);
      expect(typeof data).toBe('object');
      expect(data.id).toBe(id);
      expect(data.name).toBe('INIT');
    });
  });
});

describe('createPreset', () => {
  it('returns newly created preset object', () => {
    return api.createPreset(preset).then(data => {
      expect.assertions(2);
      expect(typeof data).toBe('object');
      expect(data).toHaveProperty('id');
    });
  });
});

describe('updatePreset', () => {
  it('returns newly updated preset object', () => {
    preset.id = '1';
    return api.updatePreset(preset).then(data => {
      expect.assertions(4);
      expect(typeof data).toBe('object');
      expect(data).toHaveProperty('id');
      expect(data.id).toBe('1');
      expect(data.name).toBe(preset.name);
    });
  });
});

describe('deletePreset', () => {
  it('returns message deleted object', () => {
    return api.deletePreset(id).then(data => {
      expect.assertions(2);
      expect(typeof data).toBe('object');
      expect(data.message).toBe('Preset deleted!');
    });
  });
});