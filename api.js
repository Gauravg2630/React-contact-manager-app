import axios from 'axios';

const api = axios.create({
  baseURL: 'https://a5371e7a24d4.ngrok-free.app/api',
});

export default api;
