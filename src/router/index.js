import Vue from 'vue'
import VueRouter from 'vue-router'

// 登录
import Login from '../components/Login.vue'
// 主页
import Home from '../components/Home.vue'
// Welcome
import Welcome from '../components/Welcome.vue'
// 用户列表
import Users from '../components/user/Users.vue'
// 用户权限列表
import Rights from '../components/power/Rights.vue'
// 角色列表
import Roles from '../components/power/Roles.vue'
// 商品分类
import Cate from '../components/goods/Cate.vue'
// 分类参数
import Params from '../components/goods/Params.vue'
// 商品列表
import Goodlist from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
// 订单列表
import Order from '../components/order/order.vue'
// 数据报表
import Report from '../components/report/Report.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: Goodlist
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
