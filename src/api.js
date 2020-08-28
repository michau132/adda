import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import router from "./router";
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = `/api/`;
    this.setHeader();
  },
  setHeader() {
    const token = localStorage.getItem("token");
    if (token) {
      Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      router.push("/login");
    }
  },
  async get(resource) {
    return await Vue.axios.get(resource);
  },
  async query(resource, params) {
    return await Vue.axios.get(resource, { params: params });
  },
  async post(resource, payload) {
    return await Vue.axios.post(`${resource}`, payload);
  },
  async delete(resource) {
    return await Vue.axios.delete(`${resource}`);
  }
};
export default ApiService;
