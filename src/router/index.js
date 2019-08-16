import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/city',
    name: 'city',
    component: City
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }],
  // eslint-disable-next-line space-before-function-paren
  scrollBehavior(to, from, savePosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
