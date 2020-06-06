import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leftList: [],
    rightList: []
  },
  mutations: {
    addToLeftList(state, payload) {
      state.leftList = payload;
    },
    addToRightList(state, payload) {
      state.rightList = payload;
    }
  },
  actions: {
    setLeftList(context, payload) {
      context.commit("addToLeftList", payload);
    },
    setRightList(context, payload) {
      context.commit("addToRightList", payload);
    }
  },
  modules: {}
});
