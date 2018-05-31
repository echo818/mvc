import Vue from 'vue'
import Router from 'vue-router'

import App from '@/controllers/app'
import Home from '@/controllers/home'
import Details from '@/controllers/details'
import Login from '@/controllers/login'
import Error from '@/controllers/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '', name: 'App', redirect: 'home' },
        { path: 'home', name: 'Home', component: Home },
        { path: 'details', name: 'Details', component: Details }
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '*', name: 'Error', component: Error }
  ]
})
