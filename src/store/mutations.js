import axios from 'axios';

export const LOGIN_SUCCESS = (state, userData) => {
  state.user.token = userData.token;
  state.user.isAuthenticated = true;
  localStorage.setItem('crmifc', userData.token);
};

export const LOGOUT = () => {
  localStorage.clear('crmifc');
  location.reload();
};

export const GET_ROLES = (state, {roles}) => {
  state.role.items = roles;
  state.role.isLoading = false;
};

export const SET_ROLE = (state, roleId) => {
  const item = state.role.items.filter(role => role.id === roleId);
  state.role.item = item[0];
};

export const CREATE_ROLE = (state, newRole) => {
  state.role.items.push(newRole);
};

export const UPDATE_ROLE = (state, updateRole) => {
  const newItems = state.role.items.map(role =>
    role.id === updateRole.id ? (role = updateRole) : role,
  );
  state.role.items = newItems;
};

export const DELETE_ROLE = (state, roleId) => {
  const newItems = state.role.items.filter(role => role.id !== roleId);
  state.role.items = newItems;
};
