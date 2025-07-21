import axios from 'axios';

const api = axios.create({
  baseURL: 'https://d588d99dc802.ngrok-free.app/api',
});

export default api;
