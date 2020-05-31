import Vue from 'vue'
import Vuex from 'vuex'
import schools from './modules/schools'
import admin from './modules/admin'
import onboard from './modules/onboard'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    schools,
    admin,
    onboard,
    notification
  },
  state: {
    mobile: false,
    navbarState: true,
    user: {
      username: 'admin',
      password: process.env.VUE_APP_ADMIN_PASS,
      status: false
    }
  },
  getters: {
    navbarState: state => {
      return state.navbarState
    },
    user: state => {
      return state.user
    }
  },
  plugins: [],
  mutations: {
    checkMobileState: state => {
      if (window.innerWidth < 480) {
        state.mobile = true
      } else {
        state.mobile = false
      }
    },
    disableNavbarState: state => {
      state.navbarState = false
    },
    enableNavbarState: state => {
      state.navbarState = true
    },
    loginUser: state => {
      state.user.status = true
    },
    wrongUser: state => {
      state.user.status = false
    }
  },
  actions: {
    checkMobileState: context => {
      context.commit('checkMobileState')
    },
    disableNavbarState: context => {
      context.commit('disableNavbarState')
    },
    enableNavbarState: context => {
      context.commit('enableNavbarState')
    },
    loginUser: context => {
      context.commit('loginUser')
    },
    wrongUser: context => {
      context.commit('wrongUser')
    }
  }
})
