import qHeader from './qHeader.vue'
import tabList from './tabList.vue'
import qContent from './qContent.vue'
import loading from './loading.vue'
import noResult from './noResult'
import topTip from './topTip'
import switches from './switches'
import { slider, sliderItem } from './slider'
import qScroll from './qScroll'
import searchBox from './searchBox'
import searchList from './searchList'
import progressBar from './progressBar'
import progressCircle from './progressCircle'
import qConfirm from './qConfirm'
import qList from './qList'

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
  Vue.component('searchBox', searchBox)
  Vue.component('searchList', searchList)
  Vue.component('progressBar', progressBar)
  Vue.component('progressCircle', progressCircle)
  Vue.component('qConfirm', qConfirm)
  Vue.component('qList', qList)
}

export default install
