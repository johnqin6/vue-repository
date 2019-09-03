<template>
  <div class="q-content" ref="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted () {
    this.setHeight()
  },
  methods: {
    setHeight () {
      console.log(document.body.offsetHeight, this.$refs.content.offsetTop)
    }
  }
}
</script>
<style lang="less" scoped>
.q-content {
  overflow-y: scroll;
}
</style>
