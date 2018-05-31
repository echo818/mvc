// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'whatwg-fetch'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.less'

import router from './router'
import Layout from './components/Layout'
import Page from './components/Page'
import Content from './components/Content'
import Login from './components/Login'

Vue.use(ElementUI)
Vue.component('layout', Layout)
Vue.component('page', Page)
Vue.component('content', Content)
Vue.component('v-login', Login)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view/>'
})
