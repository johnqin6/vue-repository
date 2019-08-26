import qHeader from './qHeader.vue'
import tabList from './tabList.vue'
import qContent from './qContent.vue'

const install = Vue => {
  Vue.component('qHeader', qHeader)
  Vue.component('tabList', tabList)
  Vue.component('qContent', qContent)
}

export default install
