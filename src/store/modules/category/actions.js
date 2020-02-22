import Category from '@/api/Category.js';

export const getCategories = async ({commit}) => {
  const response = await Category.all();
  commit('GET_CATEGORIES', response.data);
};

export const setCategory = ({commit}, categoryId) => {
  commit('SET_CATEGORY', categoryId);
};

export const createCategory = async ({commit}, name) => {
  try {
    const response = await Category.create(name);
    commit('CREATE_CATEGORY', response.data);
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

export const updateCategory = async ({commit}, category) => {
  try {
    const response = await Category.update(category);
    commit('UPDATE_CATEGORY', response.data);
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

export const deleteCategory = async ({commit}, categoryId) => {
  const response = await Category.delete(categoryId);
  commit('DELETE_CATEGORY', categoryId);
};
