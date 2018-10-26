import axios from 'axios';
const DB_URL = 'https://tribe-eq.herokuapp.com';

export const fetchPresets = () => {
  return axios.get(`${DB_URL}/api/presets`).then(({ data }) => data.presets);
};

export const fetchPresetByID = id => {
  return axios.get(`${DB_URL}/api/presets/${id}`).then(({ data }) => data);
};

export const createPreset = preset => {
  return axios.post(`${DB_URL}/api/presets`, preset).then(({ data }) => data);
};

export const updatePreset = preset => {
  return axios
    .patch(`${DB_URL}/api/presets/${preset.id}`, preset)
    .then(({ data }) => data);
};

export const deletePreset = id => {
  return axios.delete(`${DB_URL}/api/presets/${id}`).then(({ data }) => data);
};
