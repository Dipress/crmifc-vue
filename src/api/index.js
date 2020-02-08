import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8080/',
});

Api.interceptors.request.use(
  config => {
    let token = localStorage.getItem('crmifc');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default Api;
