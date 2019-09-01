<template>
  <div class="about">
    <h1>This is an about page</h1>
    <loading title="正在加载..."></loading>
    <no-result title="没有结果"></no-result>
    <top-tip ref="tip">
      <p>hello world</p>
    </top-tip>
    <switches :switches="switchesData" @switch="chooseItem"></switches>
    <!-- <slider>
      <slider-item>
        <div class="demo-img"></div>
      </slider-item>
      <slider-item>
        <div class="demo-img blue"></div>
      </slider-item>
    </slider> -->
    <search-box placeholder="搜索"></search-box>
    <search-list :searches="searches" @delete="deleteSearchItem"></search-list>
    <progress-bar></progress-bar>
    <progress-circle></progress-circle>
    <q-confirm text="这是提交文本" ref="confirm"></q-confirm>
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
      ],
      searches: ['搜索', '始数']
    }
  },
  mounted () {
    this.$refs.tip.show()
    this.$refs.confirm.show()
  },
  methods: {
    chooseItem (val) {
      console.log(val)
    },
    deleteSearchItem (val) {
      console.log(val)
      this.searches = this.searches.filter(item => item !== val)
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
