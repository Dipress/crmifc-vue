import axios from 'axios';

export const LOGIN_SUCCESS = (state, userData) => {
  state.user.token = userData.token;
  state.user.isAuthenticated = true;
  localStorage.setItem('crmifc', userData.token);
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('crmifc')}`;
};

export const LOGOUT = () => {
  localStorage.clear('crmifc');
  location.reload();
};
