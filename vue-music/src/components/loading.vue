<template>
  <div class="loading">
    <img src="../assets/image/loading.gif" width="24" height="24" alt="">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    title: {
      type: String,
      default: '正在加载...'
    }
  }
}
</script>
<style lang="less" scoped>
.loading {
  width: 100%;
  text-align: center;
  .desc {
    line-height: 20px;
    font-size: @font-size-small;
    color: @color-text-l;
  }
}
</style>
