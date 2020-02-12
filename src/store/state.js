const token = localStorage.getItem('crmifc');

export default {
  error: null,
  user: {
    token: token,
    isAuthenticated: token ? true : false,
  },
};
