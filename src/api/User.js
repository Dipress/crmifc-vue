import Api from './index.js';

const ENDPOINT = 'users';

export default {
  all() {
    return Api.get(ENDPOINT);
  },
};
