import Vue from 'vue'
import Router from 'vue-router'
// import ListView from '../views/ListView.vue'
import ApiView from '../views/ApiView.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    setTimeout(() => {
      console.log('scrollBehavior setTimeout savedPosition', savedPosition)
      window.scrollTo(savedPosition.x, savedPosition.y)
    }, 200)
  } else {
    let position = {}
    if (to.matched.length < 2) {
      // 滚动至页面顶部
      position = { x: 0, y: 0 }
    } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
        // 如果目标页面子组件中存在配置了scrollToTop为true
      position = { x: 0, y: 0 }
    }
    // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}
export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    { path: '/topics/all/:page(\\d+)?', name: 'all', component: createListView('all'), meta: { isKeepAlive: true } },
    { path: '/topics/good/:page(\\d+)?', name: 'good', component: createListView('good'), meta: { isKeepAlive: true } },
    { path: '/topics/weex/:page(\\d+)?', name: 'weex', component: createListView('weex'), meta: { isKeepAlive: true } },
    { path: '/topics/share/:page(\\d+)?', name: 'share', component: createListView('share'), meta: { isKeepAlive: true } },
    { path: '/topics/ask/:page(\\d+)?', name: 'ask', component: createListView('ask'), meta: { isKeepAlive: true } },
    { path: '/topics/job/:page(\\d+)?', name: 'job', component: createListView('job'), meta: { isKeepAlive: true } },
    { path: '/api/', component: ApiView, meta: { isKeepAlive: true } },
    { path: '/login/', component: Login, name: 'login' },
    { path: '/topics/detail/:id', name: 'detail', component: Detail, meta: { isKeepAlive: false } },
    { path: '/', redirect: '/topics/all' }
  ]
})
