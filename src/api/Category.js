import Api from './index.js';

const ENDPOINT = 'categories';

export default {
  all() {
    return Api.get(ENDPOINT);
  },
};
