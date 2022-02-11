import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1976cbe9 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _e501cf7e = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _1518f999 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _8aada77a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _1976cbe9,
    name: "404"
  }, {
    path: "/blog",
    component: _e501cf7e,
    name: "blog"
  }, {
    path: "/projects",
    component: _1518f999,
    name: "projects"
  }, {
    path: "/",
    component: _8aada77a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
