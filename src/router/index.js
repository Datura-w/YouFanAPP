import Vue from 'vue'
import Router from 'vue-router'
// 测试
import Hello from '@/components/Hello'
// import Home from './../components/index'

import Index from '@/view/index/index'
import Home  from '@/view/home/home'
import Sort from '@/view/sort/sort'
import Shopcar from '@/view/shop-car/shopcar'
import Mine from '@/view/mine/mine'

import Buyer from '@/view/layout/buyer'
import Manage from '@/view/layout/manage'
import Youfan from '@/view/layout/youfan'
import Login from '@/view/layout/login'
import Register from '@/view/layout/register'
import Lo_mine from '@/view/layout/lo_mine'
import a_Sort from '@/view/layout/a_sort'
import b_Sort from '@/view/layout/b_sort'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/youfan'
    },
    { path: '/hello',name: 'hello',component: Hello },
    { path: '/youfan',name: 'youfan',component: Youfan },
    { path: '/a_sort', name: 'a_sort',component: a_Sort },
    { path: '/b_sort', name: 'b_sort',component: b_Sort },
    { path: '/buyer', name: 'buyer',component: Buyer },
    { path: '/manage', name: 'manage',component: Manage },
    { path:'/lo_mine',name:'lo_mine',component:Lo_mine },
    { path: '/login', name: 'login',component: Login },
    { path: '/register', name: 'register',component: Register },
    
    { 
      path: '/index',
       name: 'index',
       component: Index,
// 第二层
      children:[
// 首页
        {
          path:'/home',
          name:'home',
          component:Home
        },
// 分类
        {
          path:'/sort',
          name:'sort',
          component:Sort
        },
        {
          path:'/shopcar',
          name:'shopcar',
          component:Shopcar
        },  
// 个人主页
        {
          path:'/mine',
          name:'mine',
          component:Mine           
        }
      ]
    }

  ]
})
