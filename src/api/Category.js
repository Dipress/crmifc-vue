import Api from './index.js';

const ENDPOINT = 'categories';

export default {
  all() {
    return Api.get(ENDPOINT);
  },
  create(name) {
    return Api.post(ENDPOINT, {name: name})
  },
  update({id, name}) {
    return Api.put(`${ENDPOINT}/${id}`, {name: name})
  },
  delete(id) {
    return Api.delete(`${ENDPOINT}/${id}`)
  },
};
