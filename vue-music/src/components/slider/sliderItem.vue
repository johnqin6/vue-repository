<template>
  <div class="sliderItem">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'slider-item',
  data () {
    return {
      recommends: [],
      discList: []
    }
  }
}
</script>
<style lang="less" scoped>
.sliderItem {
  width: 100%;
}
</style>
