import User from '@/api/User.js';

export const getUsers = async ({commit}) => {
  const response = await User.all();
  commit('GET_USERS', response.data);
};

export const setUser = ({commit}, userId) => {
  commit('SET_USER', userId);
};

export const createUser = async ({commit}, user) => {
  try {
    const response = await User.create(user);
    commit('CREATE_USER', response.data);
  } catch ({response}) {
    commit('SET_API_ERROR'),
      response
        ? {
            status: response.status,
            message: response.data.message,
            data: response.data,
          }
        : {message: 'Network Error'},
      {root: true};
  }
};

export const updateUser = async ({commit}, user) => {
  try {
    const response = await User.update(user);
    commit('UPDATE_USER', response.data);
  } catch ({response}) {
    commit(
      'SET_API_ERROR',
      response
        ? {
            status: response.status,
            message: response.data.message,
            data: response.data,
          }
        : {message: 'Network error'},
      {root: true},
    );
  }
};

export const deleteUser = async ({commit}, userId) => {
  const response = await User.delete(userId);
  commit('DELETE_USER', userId);
};
