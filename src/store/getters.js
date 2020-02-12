export const isAuth = state => {
  return state.user.isAuthenticated;
};

export const apiError = state => {
  return state.error;
};
