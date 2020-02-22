export const GET_CATEGORIES = (state, {categories}) => {
  state.items = categories;
  state.isLoading = false;
};

export const SET_CATEGORY = (state, categoryId) => {
  const item = state.items.filter(category => category.id === categoryId);
  state.item = item[0];
};

export const CREATE_CATEGORY = (state, newCategory) => {
  state.items.push(newCategory);
};

export const UPDATE_CATEGORY = (state, updateCategory) => {
  const newItems = state.items.map(category =>
    category.id === updateCategory.id ? (category = updateCategory) : category,
  );
  state.items = newItems;
};

export const DELETE_CATEGORY = (state, categoryId) => {
  const newItems = state.items.filter(category => category.id !== categoryId);
  state.items = newItems;
};
