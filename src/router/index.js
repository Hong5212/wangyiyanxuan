import Vue from 'vue'
import Router from 'vue-router'

// import Interlayer from '../pages/Interlayer/Interlayer'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Classify from '../pages/Classify/Classify'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'


// 使用插件
Vue.use(Router)

export default new Router({
  // mode: 'history', // 去掉url的#号
  routes: [
    /*{
      path: '/interlayer',
      component: Interlayer
    },*/
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/',
      redirect: '/classify'
    },
  ]
})
