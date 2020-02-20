export const GET_CATEGORIES = (state, {categories}) => {
  state.items = categories;
  state.isLoading = false;
};
