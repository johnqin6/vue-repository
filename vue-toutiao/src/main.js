import Vue from 'vue';
import App from './App.vue';
import router from './router/permission.js';
import store from './store/index';

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

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// 全局组件
import customComponents from './custom-components';
Vue.use(customComponents);

// 返回
Vue.prototype.back = route => {
  route.animate = 2;
  history.go(-1);
};

// 跳转文章页
Vue.prototype.skip = (route, id) => {
  route.push('/article/' + id);
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
