<template>
  <div>
    <i class="el-icon-full-screen iconFont" @click="toggleFull"></i>
  </div>
</template>
<script>
import screenfull from 'screenfull'

export default {
  methods: {
    // 切换全屏
    toggleFull () {
      if (!screenfull.enabled) {
        this.$message({
          type: 'warning',
          message: '您的浏览器不能工作'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>
