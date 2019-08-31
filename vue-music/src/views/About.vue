<template>
  <div class="about">
    <h1>This is an about page</h1>
    <loading title="正在加载..."></loading>
    <no-result title="没有结果"></no-result>
    <top-tip ref="tip">
      <p>hello world</p>
    </top-tip>
    <switches :switches="switchesData" @switch="chooseItem"></switches>
    <slider>
      <slider-item>
        <div class="demo-img"></div>
      </slider-item>
      <slider-item>
        <div class="demo-img blue"></div>
      </slider-item>
    </slider>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switchesData: [
        { name: '标题' },
        { name: '标题1' },
        { name: '标题2' }
      ]
    }
  },
  mounted () {
    this.$refs.tip.show()
  },
  methods: {
    chooseItem (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.demo-img {
  width: 100%;
  height: 200px;
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>
