import Api from './index.js';

const ENDPOINT = 'users';

export default {
  all() {
    return Api.get(ENDPOINT);
  },
  create(role) {
    return Api.post(ENDPOINT, role);
  },
  update(role) {
    return Api.put(`${ENDPOINT}/${role.id}`, role);
  },
  delete(id) {
    return Api.delete(`${ENDPOINT}/${id}`);
  },
};
