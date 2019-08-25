import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick' // 防止移动端设备点击屏幕延迟(300毫秒)，为检测用户是否双击，使其立即响应用户点击事件
import VueLazyLoad from 'vue-lazyload' // 懒加载

import './assets/css/less/index.less'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('./assets/image/default.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
