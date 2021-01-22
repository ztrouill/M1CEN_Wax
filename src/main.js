import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import VueRouter from 'vue-router'
//import router from './router'
import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'
//import store from "./store/store.js";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueRellax);
Vue.use(VueScrollTo);

new Vue({
  render: h => h(App)
}).$mount('#app')
