import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueResource from "vue-resource";
import "./Filters";

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
