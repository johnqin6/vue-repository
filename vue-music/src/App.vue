<template>
  <div id="app">
    <q-header title="山海相隔 一眼入梦"></q-header>
    <tab-list :tabList="tabList" :tabIndex="tabIndex" @change="chooseTab"></tab-list>
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
