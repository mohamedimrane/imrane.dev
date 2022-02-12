import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a0eaa04 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1518f999 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _13d351b9 = () => interopDefault(import('../pages/blog/article/_articleSlug.vue' /* webpackChunkName: "pages/blog/article/_articleSlug" */))
const _62a829ce = () => interopDefault(import('../pages/blog/tag/_tagName.vue' /* webpackChunkName: "pages/blog/tag/_tagName" */))
const _8aada77a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _c6336c60 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _4a0eaa04,
    name: "blog"
  }, {
    path: "/projects",
    component: _1518f999,
    name: "projects"
  }, {
    path: "/blog/article/:articleSlug?",
    component: _13d351b9,
    name: "blog-article-articleSlug"
  }, {
    path: "/blog/tag/:tagName?",
    component: _62a829ce,
    name: "blog-tag-tagName"
  }, {
    path: "/",
    component: _8aada77a,
    name: "index"
  }, {
    path: "/*",
    component: _c6336c60,
    name: "all"
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
