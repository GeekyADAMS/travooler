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
import superAdmin from '@/views/super-admin'
import adminSchools from '@/components/admin-schools-section'
import findProgram from '@/views/find-programs'
import findMorePrograms from '@/components/more-schools'
import findTravelProgram from '@/components/find-travels'
import chatOnboarding from '@/views/chat-form'
import schoolHome from '@/views/new-school-home'
import findSchoolsProgram from '@/components/find-schools'

Vue.use(VueRouter)

// function lazyLoad (view) {
//   return () => import(`@/views/${view}.vue`)
// }

const routes = [
  {
    path: '/about',
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
  },
  {
    path: '/admin/dashboard',
    name: 'superAdmin',
    component: superAdmin,
    children: [
      { path: '/admin/dashboard/schools', name: 'schools', component: adminSchools }
    ]
  },
  {
    path: '/find-programs',
    name: 'findProgram',
    component: findProgram,
    children: [
      { path: '/find-programs/more', name: 'more-schools', component: findMorePrograms },
      { path: '/find-programs/travels', name: 'findtravels', component: findTravelProgram },
      { path: '/find-programs/schools/:searchID', name: 'findschools', component: findSchoolsProgram }
    ]
  },
  {
    path: '/Chat',
    name: 'chatForm',
    component: chatOnboarding
  },
  {
    path: '/',
    name: 'admissionHome',
    component: schoolHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
