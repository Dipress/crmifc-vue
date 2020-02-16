export const isAuth = state => {
  return state.auth.isAuthenticated;
};

export const apiError = state => {
  return state.error;
};
