import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Router.prototype.animate = 0;
const imports = file => import(`../views/${file}.vue`);

/**
 * slide: 页面切换动画
 * login: 是否需要登录
 */

export const constantRouterMap = [
  {
    path: '/demo',
    name: 'demo',
    components: imports('Demo'),
  },
  {
    path: '/',
    name: '首页',
    meta: { page: true },
    components: imports('Layout/index')
  }
];

export const asyncRouterMap = [];

export const router = new Router({
  // mode: 'history',
  routes: constantRouterMap,
});
