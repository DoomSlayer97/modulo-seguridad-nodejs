import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "./config/http"
import "./components"

import "./config/plugins"
import "./config/scripts"
import "./config/styles"

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
