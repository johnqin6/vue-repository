import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { Message } from 'element-ui'
import getTitle from '@/utils/getTitle'
import Layout from '@/layout'
import NavTest from './modules/navTest'

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
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'dashbord',
        name: 'Dashbord',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '首页',
          icon: 'el-icon-s-data'
        }
      }
    ]
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Layout,
    redirect: '/personal/index',
    children: [
      {
        path: 'index',
        name: 'Personal-index',
        component: () => import('@/views/personal'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  },
  {
    path: '/driver',
    name: 'Driver',
    component: Layout,
    redirect: '/driver/index',
    children: [
      {
        path: 'index',
        name: 'Driver-index',
        component: () => import('@/views/driverPage'),
        meta: {
          title: '引导指南',
          icon: 'el-icon-s-flag'
        }
      }
    ]
  }
]

// 动态添加routers
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    name: 'Permission',
    redirect: '/permission/page-user',
    meta: {
      title: '权限许可',
      icon: 'el-icon-lock'
    },
    children: [
      {
        path: 'page-user',
        name: 'PageUser',
        component: () => import('@/views/permission/pageUser'),
        meta: {
          title: '用户页面',
          icon: 'el-icon-user'
        }
      },
      {
        path: 'page-admin',
        name: 'PageAdmin',
        component: () => import('@/views/permission/pageAdmin'),
        meta: {
          title: '管理员页面',
          icon: 'el-icon-user-solid'
        }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/permission/roles'),
        meta: {
          title: '权限设置',
          icon: 'el-icon-s-tools'
        }
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    redirect: '/table/base-table',
    component: Layout,
    meta: {
      title: 'Table',
      icon: 'el-icon-table iconfont'
    },
    children: [
      {
        path: 'base-table',
        name: 'BaseTable',
        component: () => import('@/views/table/commonTable'),
        meta: { title: '普通表格' }
      },
      {
        path: 'complex-table',
        name: 'ComplexTable',
        component: () => import('@/views/table/complexTable'),
        meta: { title: '复杂表格' }
      }
    ]
  },
  {
    path: '/icons',
    component: Layout,
    name: 'Icons',
    redirect: '/icons/index',
    children: [
      {
        path: 'index',
        name: 'Icons-index',
        component: () => import('@/views/icons'),
        meta: {
          title: 'Icons图标',
          icon: 'el-icon-picture-outline'
        }
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    name: 'Echarts',
    redirect: '/echarts/slide-chart',
    meta: { icon: 'el-icon-s-marketing', title: 'Echarts' },
    children: [
      {
        path: 'slide-chart',
        name: 'Sldie-chart',
        component: () => import('@/views/echarts/slideChart'),
        meta: { title: '滑动charts' }
      },
      {
        path: 'dynamic-chart',
        name: 'Dynamic-chart',
        component: () => import('@/views/echarts/dynamicChart'),
        meta: { title: '切换charts' }
      },
      {
        path: 'map-chart',
        name: 'Map-chart',
        component: () => import('@/views/echarts/mapChart'),
        meta: { title: 'map' }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    name: 'Components',
    redirect: '/components/slide-yz',
    meta: { icon: 'el-icon-coin', title: '部分组件' },
    children: [
      {
        path: 'slide-yz',
        name: 'Sldie-yz',
        component: () => import('@/views/components/slideYz'),
        meta: { icon: 'el-icon-s-claim', title: '滑动验证' }
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/components/pushImg'),
        meta: { icon: 'el-icon-upload', title: '上传图片' }
      },
      {
        path: 'carousel',
        name: 'Carousel',
        component: () => import('@/views/components/carousel'),
        meta: { icon: 'el-icon-lunbo iconfont', title: '轮播' }
      }
    ]
  },
  {
    path: '/excel',
    component: Layout,
    name: 'Excel',
    redirect: '/excel-operate/excel-out',
    meta: { icon: 'el-icon-excel iconfont', title: 'Excel' },
    children: [
      {
        path: 'excel-out',
        name: 'Excel-out',
        component: () => import('@/views/excel-operate/excelOut'),
        meta: { title: 'Excel导出' }
      },
      {
        path: 'excel-in',
        name: 'Excel-in',
        component: () => import('@/views/excel-operate/excelIn'),
        meta: { title: 'Excel导入' }
      },
      {
        path: 'mutiheader-out',
        name: 'Mutiheader-out',
        component: () => import('@/views/excel-operate/mutiheaderOut'),
        meta: { title: '多级表头导出' }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    name: 'Error',
    redirect: '/error/404',
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/errorPage/404'),
        meta: {
          title: '404',
          icon: 'el-icon-s-release'
        }
      }
    ]
  },
  {
    path: 'https://github.com/johnqin6/vue-repository/tree/master/vue-admin-webapp',
    name: 'Github',
    meta: {
      icon: 'el-icon-link',
      title: '项目链接'
    }
  },
  NavTest,
  {
    path: '*',
    name: '*404',
    redirect: '/404',
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
          const { roles } = await store.dispath('user/_getInfo')
          const addRoutes = await store.dispath(
            'permission/getAsyncRoutes',
            roles
          )
          router.addRoutes(addRoutes)

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
