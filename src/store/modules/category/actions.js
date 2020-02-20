import Category from '@/api/Category.js';

export const getCategories = async ({commit}) => {
  const response = await Category.all();
  commit('GET_CATEGORIES', response.data);
};
