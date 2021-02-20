import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

//引入一级菜单
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "login",
    hidden: true,
    meta: {
      name: "首页",
    }
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: {
      name: "登录页"
    },
    component: () => import('../views/Login/index')
  },
  {
    path: '/console',
    name: 'Console',
    component: Layout,
    redirect:"consoleIndex",
    meta: {
      name: "控制台",
      icon:"el-icon-s-tools"
    },
    children: [
      {
        path: '/consoleIndex',
        name: 'ConsoleIndex',
        meta: {
          name: "主页"
        },
        component: () => import('../views/Console/index'),
      },
      {
        path: '/consoleParticulars',
        name: 'ConsoleParticulars',
        meta: {
          name: "详情"
        },
        component: () => import('../views/Console/ConsoleParticulars.vue'),
      }
    ]
  }, {
    path: '/business',
    name: 'Business',
    component: Layout,
    meta: {
      name: "业务详情",
      icon:"el-icon-s-order"
    },
    children: [
      {
        path: '/businessIndex',
        name: 'BusinessIndex',
        meta: {
          name: "订单"
        },
        component: () => import('../views/Business/index'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
