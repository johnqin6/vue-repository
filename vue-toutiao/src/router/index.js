import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

Router.prototype.animate = 0;
// const imports = file => import(`../views/${file}.vue`);
import Layout from '../views/Layout/index.vue';
import Demo from '../views/Demo.vue';
import Account from '../views/Account';

/**
 * slide: 页面切换动画
 * login: 是否需要登录
 */

export const constantRouterMap = [
  {
    path: '/',
    name: '首页',
    meta: { page: true },
    component: Layout,
    // components: imports('Layout/index')
  },
  {
    path: '/account',
    meta: { page: true },
    component: Account,
    name: '个人中心'
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  }
];

export const asyncRouterMap = [];

export const router = new Router({
  // mode: 'history',
  routes: constantRouterMap,
});
