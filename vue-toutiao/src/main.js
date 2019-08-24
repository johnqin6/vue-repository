import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* 样式 */
import './styles/index.css';
import './styles/index.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
