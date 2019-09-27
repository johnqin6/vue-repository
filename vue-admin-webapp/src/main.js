import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
import './style/index.scss'

Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
