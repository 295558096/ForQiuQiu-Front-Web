import Vue from 'vue'
import Vuex from 'vuex'
import ajxx from './modules/ajxx'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ajxx
  }
})

