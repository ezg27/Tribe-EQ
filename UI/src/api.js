import axios from 'axios';
const DB_URL = 'https://tribe-eq.herokuapp.com';

const errorHandling = apiFunc => {
  return (...args) =>
    apiFunc(...args).catch(err => {
      return { type: 'error', message: err.message };
    });
};

export const fetchPresets = errorHandling(() => {
  return axios.get(`${DB_URL}/api/presets`).then(({ data }) => data.presets);
});

export const fetchPresetByID = errorHandling(id => {
  return axios.get(`${DB_URL}/api/presets/${id}`).then(({ data }) => data);
});

export const createPreset = errorHandling(preset => {
  return axios.post(`${DB_URL}/api/presets`, preset).then(({ data }) => data);
});

export const updatePreset = errorHandling(preset => {
  return axios
    .patch(`${DB_URL}/api/presets/${preset.id}`, preset)
    .then(({ data }) => data);
});

export const deletePreset = errorHandling(id => {
  return axios.delete(`${DB_URL}/api/presets/${id}`).then(({ data }) => data);
});
