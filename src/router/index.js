import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Callback from '@/components/Callback'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
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
      meta: {
        title: 'Authenticating...',
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Use the page's router title to name the page
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  // Redirect to the login page if not authenticated
  // for pages that have 'auth: true' set
  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (store.getters.isAuthenticated) {
        next()
      } else {
        router.push({ name: 'login' })
      }
    } else {
      if (store.getters.isAuthenticated) {
        router.push({ name: 'home' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
