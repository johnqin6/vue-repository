import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* 样式 */
import './styles/index.css';
import './styles/index.less';

/* 工具类 */
import './utils/iconfont';
import './utils/rem';
import { Cookie } from './utils/storage';

// 自定义全局指令
import './directive';

Vue.prototype.$cookie = Cookie;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
