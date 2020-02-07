import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '@/components/Homepage'
import explorepage from '@/components/Explore-Travels'
import travoolerpage from '@/components/Travooler'
import searchpage from '@/components/search-page'
import onboarding from '@/components/onboarding'
import travoolerOnboarding from '@/components/travooler-onboarding'
import signIn from '@/components/sign-in'
import setPassword from '@/components/set-password'
import payment from '@/components/payment'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/explore',
    name: 'explorepage',
    component: explorepage
  },
  {
    path: '/travooler',
    name: 'travoolerpage',
    component: travoolerpage
  },
  {
    path: '/search-school',
    name: 'searchpage',
    component: searchpage
  },
  {
    path: '/Get-Started',
    name: 'onboarding',
    component: onboarding
  },
  {
    path: '/explore-travels/Get-Started',
    name: 'travoolerOnboarding',
    component: travoolerOnboarding
  },
  {
    path: '/set-password',
    name: 'setPassword',
    component: setPassword
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
