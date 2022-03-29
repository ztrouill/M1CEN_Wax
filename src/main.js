import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import VueRouter from 'vue-router'
import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'
import IntersectionObserver from "intersection-observer"

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueRellax);
Vue.use(VueScrollTo);

new Vue({
  IntersectionObserver,
  render: h => h(App),
}).$mount('#app')
