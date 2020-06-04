import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workingList: [],
    retiredList: []
  },
  mutations: {
    addToRetiredList(state, payload) {
      state.retiredList = payload;
    },
    addToWorkingList(state, payload) {
      state.workingList = payload;
    }
  },
  actions: {
    setRetiredList(context, payload) {
      context.commit("addToRetiredList", payload);
    },
    setWorkingList(context, payload) {
      context.commit("addToWorkingList", payload);
    }
  },
  modules: {}
});
