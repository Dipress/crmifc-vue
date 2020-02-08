import Api from './index.js';

export default {
  signin(credentials) {
    return Api.post('signin', credentials);
  },
};
