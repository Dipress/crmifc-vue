export const GET_ROLES = (state, {roles}) => {
  state.items = roles;
  state.isLoading = false;
};

export const SET_ROLE = (state, roleId) => {
  const item = state.items.filter(role => role.id === roleId);
  state.item = item[0];
};

export const CREATE_ROLE = (state, newRole) => {
  state.items.push(newRole);
};

export const UPDATE_ROLE = (state, updateRole) => {
  const newItems = state.items.map(role =>
    role.id === updateRole.id ? (role = updateRole) : role,
  );
  state.items = newItems;
};

export const DELETE_ROLE = (state, roleId) => {
  const newItems = state.items.filter(role => role.id !== roleId);
  state.items = newItems;
};
