<template>
  <header class="q-header">
    <h1 class="title">{{ title }}</h1>
    <span class="right-icon">
      <i :class="icon"></i>
    </span>
  </header>
</template>
<script>
export default {
  name: 'q-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'icon-mine'
    }
  }
}
</script>
<style lang="less" scoped>
.q-header {
  position: relative;
  height: 44px;
  line-height: 44px;
  color: @color-theme;
  text-align: center;
  .right-icon {
    position: absolute;
    top: 5px;
    right: 10px;
    i {
      font-size: 24px;
    }
  }
}
</style>
