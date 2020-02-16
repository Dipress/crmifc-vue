const token = localStorage.getItem('crmifc');

export default {
  error: null,
  auth: {
    token: token,
    isAuthenticated: token ? true : false,
  },
};
