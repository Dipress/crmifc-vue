import axios from 'axios';
import Auth from '@/api/Auth.js';
import Role from '@/api/Role.js';

export const login = async ({commit}, credentials) => {
  const response = await Auth.signin(credentials);
  commit('LOGIN_SUCCESS', response.data);
};

export const logout = ({commit}) => {
  commit('LOGOUT');
};

export const getRoles = async ({commit}) => {
  const response = await Role.all();
  commit('GET_ROLES', response.data);
};

export const setRole = ({commit}, roleId) => {
  commit('SET_ROLE', roleId);
};

export const createRole = async ({commit}, name) => {
  const response = await Role.create(name);
  commit('CREATE_ROLE', response.data);
};

export const updateRole = async ({commit}, role) => {
  const response = await Role.update(role);
  commit('UPDATE_ROLE', response.data);
};

export const deleteRole = async ({commit}, roleId) => {
  const response = await Role.delete(roleId);
  commit('DELETE_ROLE', roleId);
};
