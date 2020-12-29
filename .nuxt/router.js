import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01d9b69e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _311882a0 = () => interopDefault(import('..\\pages\\my-booking.vue' /* webpackChunkName: "pages_my-booking" */))
const _16ca19da = () => interopDefault(import('..\\pages\\reservation-detail.vue' /* webpackChunkName: "pages_reservation-detail" */))
const _7e4e8b2a = () => interopDefault(import('..\\pages\\reservation-received.vue' /* webpackChunkName: "pages_reservation-received" */))
const _23c38b10 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _68ce80a1 = () => interopDefault(import('..\\pages\\search-result-info.vue' /* webpackChunkName: "pages_search-result-info" */))
const _356b819a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/aloha_web/dist/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _01d9b69e,
    name: "login"
  }, {
    path: "/my-booking",
    component: _311882a0,
    name: "my-booking"
  }, {
    path: "/reservation-detail",
    component: _16ca19da,
    name: "reservation-detail"
  }, {
    path: "/reservation-received",
    component: _7e4e8b2a,
    name: "reservation-received"
  }, {
    path: "/search",
    component: _23c38b10,
    name: "search"
  }, {
    path: "/search-result-info",
    component: _68ce80a1,
    name: "search-result-info"
  }, {
    path: "/",
    component: _356b819a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
