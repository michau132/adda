import Vue from "vue";
import Vuex from "vuex";
import ApiService from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    interests: []
  },
  mutations: {
    updateInterests(state, payload) {
      state.interests = payload;
    }
  },
  actions: {
    async getInterests({ commit }) {
      const payload = await ApiService.get("getInterests");
      commit("updateInterests", payload.data.interests);
    }
  },
  getters: {
    interests: state => state.interests
  },
  modules: {}
});
