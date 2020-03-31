import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '@/views/Homepage'
import explorepage from '@/views/Explore-Travels'
import travoolerpage from '@/views/Travooler'
import searchpage from '@/views/search-page'
import onboarding from '@/views/onboarding'
import travoolerOnboarding from '@/views/travooler-onboarding'
import signIn from '@/views/sign-in'
import setPassword from '@/views/set-password'
import payment from '@/views/payment'
import postSchools from '@/views/post-schools'
import admin from '@/views/admin'

Vue.use(VueRouter)

// function lazyLoad (view) {
//   return () => import(`@/views/${view}.vue`)
// }

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
  },
  {
    path: '/post-schools',
    name: 'postSchools',
    component: postSchools
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
