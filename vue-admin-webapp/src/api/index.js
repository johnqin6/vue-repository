import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import { Loading, Message } from 'element-ui'

// 创建一个请求实例
const $axios = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url, 会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API
})

// 挂载到vue原型
Vue.prototype.$http = axios // 并发请求
// 全局请求和响应拦截器中添加请求状态
let loading = null

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    loading = Loading.service({ text: '拼命加载中' })
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
$axios.interceptors.response.use(
  response => {
    if (loading) {
      loading.close()
    }
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (loading) {
      loading.close()
    }
    console.log(error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401，清除token信息并跳转到登录页面
          store.commit('DEL_TOKEN')
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        case 404:
          Message.error('网络请求不存在')
          break
        default:
          Message.error(error.response.data.message)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        Message.error('请求超时！请检查网络是否正常')
      } else {
        Message.error('请求失败！请检查网络是否连接')
      }
    }
    return Promise.reject(error)
  }
)

// get, post请求方法
export default {
  get (url, params) {
    return $axios({
      method: 'get',
      url,
      params
    })
  },
  post (url, data) {
    return $axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}
