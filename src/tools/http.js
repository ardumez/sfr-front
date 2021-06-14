import axios, { AxiosInstance } from 'axios';
import env from '../config';

const instance = axios.create({ baseURL: env.sfrBackUrl });

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;