import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  focus: false
};

const getters = {
  focus: state => state.focus,
};

const mutations = {
    CHANGE_FOCUS(state) {
        state.focus = !state.focus;
    }
};

const actions = {
    getColor({commit}, color) {
        console.log(commit);
        console.log("color - " + color);
        let str = "underlined-" + color;
        return str;
    },
    getImg({commit}, {id, i}) {
        console.log(commit + id);
        return require("@/assets/img/" + id + "/" + i +".png");
      },
};

let store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    strict: true
  });
  
  global.store = store;
  
  export default store;