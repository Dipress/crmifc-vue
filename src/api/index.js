import axios from 'axios';
import store from '@/store/index';

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

Api.interceptors.response.use(
  response => {
    store.commit('CLEAR_API_ERROR');
    return response;
  },
  error => {
    if (error.response.status === 401) {
      store.commit('LOGOUT');
    }
    return Promise.reject(error);
  },
);

export default Api;
