import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index.js'
import store from './store'
import VueScrollReveal from 'vue-scroll-reveal'
import Navbar from './components/navbar'
import Footer from './components/footer'
import prefooter from './components/prefooter'
import ExtNav from './components/navbarExT'
import TravNav from './components/navbar-travooler'
import PortalVue from 'portal-vue'
import VueTyperPlugin from 'vue-typer'
// import remixIcon from 'remixicon'

// import chillax from './plugins/chillax'

// Vue.use(chillax)

Vue.use(PortalVue)
Vue.use(VueTyperPlugin)
// Vue.use(remixIcon)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 2000,
  scale: 1,
  distance: '30px',
  mobile: false
})
Vue.config.productionTip = false

Vue.component('nav-bar', Navbar)
Vue.component('nav-bar-ExT', ExtNav)
Vue.component('navTrav', TravNav)
Vue.component('preFooter', prefooter)
Vue.component('uni-footer', Footer)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
