import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { Message } from 'element-ui'
import getTitle from '@/utils/getTitle'

Vue.use(Router)

/**
 * 路由相关属性说明
 * hidden: 当设置hidden为true是，表示不在sideBars侧边栏中显示
 * mets {
 *  title: xxx, 设置sideBars侧边栏名称
 *  icon: xxx, 设置ideBars侧边栏图标
 *  noCache: true  当设置为true时不缓存该路由页面
 * }
 */

// 通用routes
export const currencyRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      title: '登陆页'
    },
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/errorPage/404.vue'),
    hidden: true
  }
]

const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior () {
      return {
        x: 0,
        y: 0
      }
    }
  })
}

const router = creatRouter()

// 解决addRoute不能删除动态路由问题
export function resetRouter () {
  const reset = creatRouter()
  router.matcher = reset.matcher
}

// 路由导航
router.beforeEach(async (to, from, next) => {
  document.title = getTitle(to.meta.title)
  if (to.path === '/login') {
    next()
  } else {
    if (store.getters.token) {
      const hasRoles = store.geeters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // const { roles } = await store.dispath('user/_getInfo')
          // const addRoutes = await store.dispath(
          //   'permission/getAsyncRoutes',
          //   roles
          // )
          // router.addRoutes(addRoutes)

          // 确保addroutes完整的hack方法
          // 设置replace:true，这样导航就不会留下历史记录
          next({
            ...to,
            replace: true
          })
        } catch (err) {
          Message.error(err)
        }
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})

export default router
