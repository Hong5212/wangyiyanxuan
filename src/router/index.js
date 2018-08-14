import Vue from 'vue'
import Router from 'vue-router'

import Interlayer from '../pages/Interlayer/Interlayer'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import Classify from '../pages/Classify/Classify'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'
import Login from '../pages/Login/Login'

// 使用插件
Vue.use(Router)

export default new Router({
  // mode: 'history', // 去掉url的#号
  routes: [
    {
      path: '/interlayer',
      component: Interlayer
    },
    {
      path: '/home',
      component: Home,
      meta: { isShowFooterGuide: true }
    },
    {
      path: '/detail',
      component: Detail,
      meta: { isShowFooterGuide: true }
    },
    {
      path: '/classify',
      component: Classify,
      meta: { isShowFooterGuide: true }
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: { isShowFooterGuide: true }
    },
    {
      path: '/personal',
      component: Personal,
      meta: { isShowFooterGuide: false }
    },
    {
      path: '/login',
      component: Login,
      meta: { isShowFooterGuide: false }
    },
    {
      path: '/',
      redirect: '/interlayer'
    },
  ]
})
