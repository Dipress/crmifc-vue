import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import * as actions from './actions.js';
import * as mutations from './mutations.js';
import * as getters from './getters.js';
import role from './modules/role/index.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    role
  },
});
