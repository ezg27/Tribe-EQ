import axios from 'axios';
const DB_URL = 'https://tribe-eq.herokuapp.com';

export const fetchPresets = () => {
  return axios.get(`${DB_URL}/api/presets`).then(({ data }) => data.presets);
};
