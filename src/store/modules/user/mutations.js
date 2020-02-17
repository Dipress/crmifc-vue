export const GET_USERS = (state, {users}) => {
  state.items = users;
  state.isLoading = false;
};

export const SET_USER = (state, userId) => {
  const item = state.items.filter(user => user.id === userId);
  state.item = item[0];
};

export const CREATE_USER = (state, newUser) => {
  state.items.push(newUser);
};

export const UPDATE_USER = (state, updateUser) => {
  const newItems = state.items.map(user =>
    user.id === updateUser.id ? (user = updateUser) : user,
  );
  state.items = newItems;
};

export const DELETE_USER = (state, userId) => {
  const newItems = state.items.filter(user => user.id !== userId);
  state.items = newItems;
};
