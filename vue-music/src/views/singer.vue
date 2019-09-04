<template>
  <div class="singer" ref="singer">
    <list-view @select="selectSinger" :data="singers" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>
<script>
import listView from './components/listView'
import { getSingerList } from '../api/singer'
import { randomUpperChar, getCharList, countWithArrKey, transFromArrWithObj, arrSort } from '../utils/util'

const HOT_SINGER_LEN = 5
const HOT_NAME = '热门'

export default {
  name: 'singer',
  data () {
    return {
      singers: [],
      charList: [],
      param: {
        area: -100,
        sex: -100,
        genre: -100,
        index: -100,
        sin: 0,
        cur_page: 1
      }
    }
  },
  created () {
    this.getSingerData()
    this.charList = getCharList(1)
  },
  methods: {
    selectSinger (singer) {
      console.log(singer)
    },
    // 获取歌手数据
    async getSingerData () {
      this.singers = []
      const res = await getSingerList(this.param)
      if (res.code === 0) {
        this.singers = this.normalizeSinger(res.singerList.data.singerlist)
        console.log(this.singers)
      }
    },
    // 处理数据
    normalizeSinger (list) {
      let hotSingers = list.filter((item, index) => index < HOT_SINGER_LEN)
      let charSingers = list.filter((item, index) => index >= HOT_SINGER_LEN)
      hotSingers = hotSingers.map(item => {
        item.title = HOT_NAME
        return item
      })
      let _hotSingers = []
      _hotSingers[0] = {
        title: HOT_NAME,
        items: hotSingers
      }
      charSingers = charSingers.map(item => {
        item.title = randomUpperChar()
        return item
      })
      let obj = countWithArrKey(charSingers, 'title')
      let _charSingers = transFromArrWithObj(obj, { key1: 'title', key2: 'items' })
      charSingers = arrSort(_charSingers, 'title')
      let singers = [..._hotSingers, ...charSingers]
      return singers
    }
  },
  components: {
    listView
  }
}
</script>
