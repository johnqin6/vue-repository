<template>
  <div class="singer" ref="singer">
    hello singer
  </div>
</template>
<script>
import { getSingerList } from '../api/singer'
import { randomUpperChar, getCharList } from '../utils/util'

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
    console.log(this.charList)
  },
  methods: {
    async getSingerData () {
      this.singers = []
      const res = await getSingerList(this.param)
      if (res.code === 0) {
        let singers = res.singerList.data.singerlist
        let hotSingers = singers.filter((item, index) => index < HOT_SINGER_LEN)
        let charSingers = singers.filter((item, index) => index >= HOT_SINGER_LEN)
        hotSingers = hotSingers.map(item => {
          item.fn = HOT_NAME
          return item
        })
        charSingers = charSingers.map(item => {
          item.fn = randomUpperChar()
          return item
        })
        this.singers = [...hotSingers, ...charSingers]
        console.log(this.singers)
      }
    }
  }
}
</script>
