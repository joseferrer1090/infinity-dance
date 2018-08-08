import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

Vue.config.productionTip = false;

// ==== Bootstrap components integrations (JQuery needed) ======= //
//window.$ = window.jQuery = require("jquery");
require("bootstrap-sass");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
