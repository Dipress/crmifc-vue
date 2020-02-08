export const isAuth = state => {
  return state.user.isAuthenticated;
};

export const roles = state => {
  return state.role.items;
};

export const isLoadingRoles = state => {
  return state.role.isLoading;
};

export const role = state => {
  return state.role.item;
};
