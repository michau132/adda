import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vue2Dropzone from "vue2-dropzone";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
Vue.component("vue-dropzone", vue2Dropzone);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
