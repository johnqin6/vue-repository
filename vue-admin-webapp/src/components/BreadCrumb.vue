<template>
  <div class="breadDiv" id="domBread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="item.path"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'bread-crumb',
  data () {
    return {
      breadList: []
    }
  },
  watch: {
    $route: { // 深度监听
      handler (route) {
        let allList = route.matched.filter(item => {
          if (item.meta && item.meta.title) {
            if (item.redirect) {
              item.path = ''
            }
            return true
          }
        })
        if (allList[0].path !== '/' && allList[0].path !== '/dashbord') {
          allList.unshift({ path: '/', meta: { title: '首页' } })
        }
      },
      immediate: true
    }
  }
}
</script>
