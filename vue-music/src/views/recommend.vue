<template>
  <div class="recommend">
    <swiper class="swiper-container" :options="swiperOption">
      <swiper-slide v-for="item in recommends" :key="item.id">
        <img :src="item.picUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getRecommend, getDiscList } from '@/api/recommend'
import { mapMutations } from 'vuex'

export default {
  name: 'recommend',
  data () {
    return {
      recommends: [],
      swiperOption: {
        // 循环
        loop: true,
        // 每张播放时长3秒, 自动播放
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        // 参数选项，显示小点
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 向前向后
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.getRecommendList()
    this.getDiscData()
  },
  methods: {
    async getRecommendList () {
      const res = await getRecommend()
      if (res.code === 0) {
        this.recommends = res.data.slider
      }
    },
    async getDiscData () {
      const res = await getDiscList()
      console.log(res)
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  }
}
</script>
<style lang="less" scoped>
.recommend {
  .swiper-container {
    img {
      width: 100%;
    }
  }
}
</style>
