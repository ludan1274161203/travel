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
    path: '/detail',
    name: 'detail',
    component: Detail
  }]
})
