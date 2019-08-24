<template>
  <div class="footer-wrapper df-center border-half-top">
    <ul class="f_clear">
      <router-link
        tag="li"
        :to="item.path"
        
        v-for="(item, index) in footerBarList"
        :key="index"
      >
      <!-- :class="{'active': ($router.matched[0].path || $router.matched[1].path) === item.path}" -->
        <Icon :name="item.icon"></Icon>
        <div>{{ item.title }}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Local } from "@/utils/storage";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'footerBarList',
      'user'
    ])
  },
  mounted() {
    console.log(this.footerBarList)
  },
};
</script>

<style lang="less" scoped>
.footer-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  font-size: 0.16rem;
  z-index: 99;
  background-color: #fff;
  ul {
    width: 100%;
  }
  li {
    width: 25%;
    float: left;
    text-align: center;
    color: @theme-black;
    svg {
      width: 0.22rem;
      height: 0.22rem;
    }
    div {
      width: 100%;
      font-size: 0.12rem;
      margin-top: 0.06rem;
    }
  }
  .active {
    color: @theme-red;
  }
}
</style>
