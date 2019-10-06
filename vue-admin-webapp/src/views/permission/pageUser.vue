<template>
  <div class="pageUser">
    <el-card>
      <div class="driver_p0">
        <i class="el-icon-s-opportunity"></i>您的权限页面是：
      </div>
      <el-tag v-for="item in roles" :key="item">{{ item }}</el-tag>
    </el-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['roles'])
  }
}
</script>
<style lang="scss" scoped>
.pageUser .el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.driver_p0 {
  margin-bottom: 20px;
  font-size: 14px;
  i {
    margin-right: 5px;
    color: #ffc107;
    font-size: 18px;
  }
}
</style>
