import Vue from 'vue'
import VueRouter from 'vue-router'
// import homepage from '@/components/Homepage'
// import explorepage from '@/components/Explore-Travels'
// import travoolerpage from '@/components/Travooler'
// import searchpage from '@/components/search-page'
import onboarding from '@/views/onboarding'
import travoolerOnboarding from '@/views/travooler-onboarding'
// import signIn from '@/components/sign-in'
// import setPassword from '@/components/set-password'
// import payment from '@/components/payment'

Vue.use(VueRouter)

function lazyLoad (view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: lazyLoad('Homepage')
  },
  {
    path: '/explore',
    name: 'explorepage',
    component: lazyLoad('Explore-Travels')
  },
  {
    path: '/travooler',
    name: 'travoolerpage',
    component: lazyLoad('Travooler')
  },
  {
    path: '/search-school',
    name: 'searchpage',
    component: lazyLoad('search-page')
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
    component: lazyLoad('set-passsword')
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: lazyLoad('sign-in')
  },
  {
    path: '/payment',
    name: 'payment',
    component: lazyLoad('payment')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
