import axios from 'axios';

const api = axios.create({
  baseURL: 'https://27327243db2b.ngrok-free.app/api',
});

export default api;
