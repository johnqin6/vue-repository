<template>
  <div class="no-result">
    <div class="no-result-icon"></div>
    <p class="no-result-text">{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: 'no-result',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/less/mixin.less';

.no-result {
  text-align: center;
  .no-result-icon {
    width: 86px;
    height: 90px;
    margin: 0 auto;
    background-image: url('../assets/image/no-result@3x.png');
    background-size: 86px 90px;
  }
  .no-result-text {
    margin-top: 30px;
    font-size: @font-size-medium;
    color: @color-text-d;
  }
}
</style>
