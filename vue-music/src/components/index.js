import qHeader from './qHeader.vue'
import tabList from './tabList.vue'
import qContent from './qContent.vue'
import loading from './loading.vue'
import noResult from './noResult'
import topTip from './topTip'
import switches from './switches'
import { slider, sliderItem } from './slider'
import qScroll from './qScroll'

const install = Vue => {
  Vue.component('qHeader', qHeader)
  Vue.component('tabList', tabList)
  Vue.component('qContent', qContent)
  Vue.component('loading', loading)
  Vue.component('noResult', noResult)
  Vue.component('topTip', topTip)
  Vue.component('slider', slider)
  Vue.component('sliderItem', sliderItem)
  Vue.component('switches', switches)
  Vue.component('qScroll', qScroll)
}

export default install
