import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Callback from '@/components/Callback'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'aws-vuejs-cognito',
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login',
        auth: false
      }
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
      query: {
        code: 'code',
        state: 'state'
      },
      meta: {
        title: 'Authenticating...',
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (store.getters.isAuthenticated) {
        next()
      } else {
        router.push({ name: 'login' })
      }
    } else {
      if (store.getters.isAuthenticated) {
        router.push({ name: 'index' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
