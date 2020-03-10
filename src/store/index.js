import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobile: false
  },
  getters: {
  },
  mutations: {
    checkMobileState: state => {
      if (window.innerWidth < 480) {
        state.mobile = true
      } else {
        state.mobile = false
      }
    }
  },
  actions: {
    checkMobileState: context => {
      context.commit('checkMobileState')
    }
  }
})
