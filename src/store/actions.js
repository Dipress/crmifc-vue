import axios from 'axios';

export const login = async ({commit}, credentials) => {
  const response = await axios.post(
    'http://localhost:8080/signin',
    credentials,
  );
  commit('LOGIN_SUCCESS', response.data);
};

export const logout = ({commit}) => {
  commit('LOGOUT');
};
