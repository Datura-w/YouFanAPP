import Vue from 'vue'
import Router from 'vue-router'
// 测试
import Hello from '@/components/Hello'
// import Home from './../components/index'

import Index from '@/view/index/index'
import Seek  from '@/view/seek/seek'
import Health from '@/view/health/health'
import Chat from '@/view/chat/chat'
import Mine from '@/view/mine/mine'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path:'/seek',
          name:'seek',
          component:Seek
        },
        {
          path:'/health',
          name:'health',
          component:Health
        },
        {
          path:'/chat',
          name:'chat',
          component:Chat
        },  
        {
          path:'/mine',
          name:'mine',
          component:Mine
        }
      ]

    },

  ]
})
