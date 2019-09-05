<template>
  <div id="app">
    <q-header title="山海相隔 一眼入梦"></q-header>
    <tab-list :tabList="tabList" :tabIndex="tabIndex" @change="chooseTab" class="tab"></tab-list>
    <div style="height: 44px;"></div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabIndex: 0,
      tabList: [
        { name: '推荐', path: '/recommend' },
        { name: '歌手', path: '/singer' },
        { name: '排行', path: '' },
        { name: '搜索', path: '' }
      ]
    }
  },
  methods: {
    chooseTab (index) {
      this.tabIndex = index
      this.$router.push({
        path: this.tabList[index].path
      })
    }
  }
}
</script>
<style lang="less" scoped>
.tab {
  position: fixed;
  top: 44px;
  z-index: 99;
  height: 44px;
}
</style>
