export const LOGIN_SUCCESS = (state, userData) => {
  state.user.token = userData.token;
  state.user.isAuthenticated = true;
  localStorage.setItem('crmifc', userData.token);
};

export const LOGOUT = () => {
  localStorage.clear('crmifc');
  location.reload();
};

export const SET_API_ERROR = (state, {status, message, data}) => {
  state.error = {
    status: status ? status : null,
    message: message ? message : null,
    body: data ? data.errors : null,
  };
};

export const CLEAR_API_ERROR = state => {
  state.error = null;
};
