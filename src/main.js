import Vue from "vue";
import App from "./App.vue";

import router from "./router";

import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-7774e/databases/(default)/documents/";

const interceptorsRequest = axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsRequest);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
