import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/js/jquery.js";
import "./assets/js/uikit.min.js";
import "./assets/js/custom.js";
import "./registerServiceWorker";
import "./assets/css/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
