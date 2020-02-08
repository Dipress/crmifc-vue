import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import * as actions from './actions.js';
import * as mutations from './mutations.js';
import * as getters from './getters.js';

Vue.use(Vuex);

const token = localStorage.getItem('crmifc');

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {},
});
