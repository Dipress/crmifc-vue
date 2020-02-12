import Auth from '@/api/Auth.js';

export const login = async ({commit}, credentials) => {
  const response = await Auth.signin(credentials);
  commit('LOGIN_SUCCESS', response.data);
};

export const logout = ({commit}) => {
  commit('LOGOUT');
};
