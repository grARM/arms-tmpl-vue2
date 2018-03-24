import Vue from 'vue'
import Vuex from 'vuex'
// import user from './user/';
import work from './work/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    work
  }
})
