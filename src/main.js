// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'font-awesome/css/font-awesome.css'
import moment from 'moment'

Vue.config.productionTip = false

const store = createStore()
sync(store, router)
Vue.use(iView)
moment.locale('zh-CN')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
