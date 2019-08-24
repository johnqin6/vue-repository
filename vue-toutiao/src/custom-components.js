import CircleLoading from './components/CircleLoading/index.vue';
import FullCircleLoading from './components/CircleLoading/full-loading.vue';
import IconSvg from './components/Icon-svg';

const install = Vue => {
  Vue.component('CircleLoading', CircleLoading);
  Vue.component('FullCircleLoading', FullCircleLoading);
  Vue.component('Icon', IconSvg);
};

export default install;
