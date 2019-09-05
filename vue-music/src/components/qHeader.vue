<template>
  <header class="q-header">
    <div class="header-container">
      <h1 class="title">{{ title }}</h1>
      <span class="right-icon">
        <i :class="icon"></i>
      </span>
    </div>
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
  height: 44px;
}
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  z-index: 99;
  line-height: 44px;
  color: @color-theme;
  background-color: @color-background;
  text-align: center;
  .right-icon {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    i {
      font-size: 24px;
    }
  }
}
</style>
