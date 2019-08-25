import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

Router.prototype.animate = 0;
// const imports = file => import(`../views/${file}.vue`);
import Layout from '../views/Layout/index.vue';
import Demo from '../views/Demo.vue';
import Account from '../views/Account';
import Home from '../views/Home';
import Feedback from '../views/Feedback';
import Msg from '../views/Msg';
import Jingdong from '../views/Jingdong';

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
    redirect: '/home',
    children: [
      { path: 'home', component: Home, name: '首页'}
    ]
  },
  {
    path: '/account',
    meta: { page: true },
    component: Account,
    name: '个人中心'
  },
  {
    path: '/feedback',
    name: '用户反馈',
    meta: {
      slide: 1,
      login: true
    },
    component: Feedback
  },
  {
    path: '/msg',
    name: '消息通知',
    meta: {
      slide: 1,
      login: true
    },
    component: Msg
  },
  {
    path: '/jd',
    name: '京东商城',
    meta: {
      slide: 1,
      login: true
    },
    component: Jingdong
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
