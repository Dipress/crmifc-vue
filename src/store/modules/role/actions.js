import Role from '@/api/Role.js';

export const getRoles = async ({commit}) => {
  const response = await Role.all();
  commit('GET_ROLES', response.data);
};

export const setRole = ({commit}, roleId) => {
  commit('SET_ROLE', roleId);
};

export const createRole = async ({commit}, name) => {
  try {
    const response = await Role.create(name);
    commit('CREATE_ROLE', response.data);
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

export const updateRole = async ({commit}, role) => {
  try {
    const response = await Role.update(role);
    commit('UPDATE_ROLE', response.data);
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

export const deleteRole = async ({commit}, roleId) => {
  const response = await Role.delete(roleId);
  commit('DELETE_ROLE', roleId);
};
