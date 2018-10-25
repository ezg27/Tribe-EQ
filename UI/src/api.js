import axios from 'axios';
const DB_URL = 'localhost:3001';

export const fetchPresets = () => {
  return axios.get(`${DB_URL}/api/presets`).then(({ data }) => {
    console.log(data);
  });
};
