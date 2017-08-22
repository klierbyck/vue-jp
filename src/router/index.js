//引入vue
import Vue from 'vue'
//引入vue-router插件
import Router from 'vue-router'
//引入一级路由页
import Home from '@/pages/Home'
import Cang from '@/pages/Cang'
import Global from '@/pages/Global'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'
// import Ding from '@/pages/Ding'
import list2 from '@/components/list2'
import home_detail from '@/components/home_detail'
//引入二级路由-详情页面
import Category from '@/components/Category'
//引进二级路由-商品列表
import Glo_ils from '@/components/Glo_ils'

import Details from '@/components/Details'
// 引入二级路由实现更多
import Ding from '@/components/Ding'
import Shou from '@/components/Shou'
// 引入二级路由实现登录和注册
import Denglu from '@/components/Denglu'
import soso from '@/components/soso'
//加载插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cang',
      name: 'Cang',
      component: Cang
    },
    {
      path: '/detail',
      name: 'Details',
      component: Details
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/global',
      name: 'Global',
      component: Global
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },{
      path: '/Ding',
      name: 'Ding',
      component: Ding
    },{
      path: '/Shou',
      name: 'Shou',
      component: Shou
    },
    {
      path: '/ils',
      name: 'Ils',
      component: Glo_ils
    },
    {
      path: '/list2',
      component: list2
    },
    {
      path : '/list1',
      component : Home
    },
    {
      path : '/home_detail',
      component : home_detail
    },
    {
      path : '/Denglu',
      component : Denglu
    },
    {
      path : '/soso',
      component : soso
    }
  ]
});
