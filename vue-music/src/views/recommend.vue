<template>
  <div class="recommend">
    <q-scroll>
      <swiper class="swiper-container" :options="swiperOption">
        <swiper-slide v-for="item in recommends" :key="item.id">
          <img :src="item.picUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="recommend-list">
        <h2 class="list-title">热门歌单推荐</h2>
        <ul>
          <li class="item"
            @click="selectItem(item)"
            v-for="(item, index) in discList" :key="index">
            <div class="icon">
              <img v-lazy="item.imgurl" width="60" height="60">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.dissname"></h2>
              <p class="desc" v-html="item.creator.name"></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="loading-container" v-show="isLoading">
        <loading></loading>
      </div>
    </q-scroll>
    <router-view></router-view>
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
      discList: [],
      isLoading: false,
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
    selectItem (item) {
      this.$router.push({
        path: `/disc/${item.dissid}`
      })
      this.setDisc(item)
    },
    async getRecommendList () {
      const res = await getRecommend()
      if (res.code === 0) {
        this.recommends = res.data.slider
      }
    },
    async getDiscData () {
      this.isLoading = true
      const res = await getDiscList()
      if (res.code === 0) {
        this.discList = res.data.list
        this.isLoading = false
      }
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
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: @font-size-medium;
      color: @color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
      .icon {
        flex: 0 0 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 20px;
        overflow: hidden;
        font-size: @font-size-medium;
        .name {
          margin-bottom: 10px;
          color: @color-text;
        }
        .desc {
          color: @color-text-d;
        }
      }
    }
  }
  .loading-container {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
}
</style>
