import Vue from 'vue'
import Router from 'vue-router'
// import ListView from '../views/ListView.vue'
import ApiView from '../views/ApiView.vue'
import Detail from '../views/Detail.vue'

Vue.use(Router)

const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/topics?tab=all&page=:page(\\d+)', name: 'all', component: createListView('all') },
    { path: '/topics?tab=good&page=:page(\\d+)', name: 'good', component: createListView('good') },
    { path: '/topics?tab=weex&page=:page(\\d+)', name: 'weex', component: createListView('weex') },
    { path: '/topics?tab=share&page=:page(\\d+)', name: 'share', component: createListView('share') },
    { path: '/topics?tab=ask&page=:page(\\d+)', name: 'ask', component: createListView('ask') },
    { path: '/topics?tab=job&page=:page(\\d+)', name: 'job', component: createListView('job') },
    { path: '/api/', component: ApiView },
    { name: 'detail', path: '/topic/:id', component: Detail },
    { path: '/', redirect: '/topics?tab=all&page=1' }
  ]
})
