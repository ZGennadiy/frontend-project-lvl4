import axios from 'axios';
import CONFIG from './config.js';

const apiClient = axios.create({
  baseURL: CONFIG.apiUrl,
  headers: {
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData?.token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${userData.token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default apiClient;
