import Vue from 'vue'
import Router from 'vue-router'

import App from '@/views/app'
import Home from '@/views/home'
import Details from '@/views/details'
import Login from '@/views/login'
import Error from '@/views/error'

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
