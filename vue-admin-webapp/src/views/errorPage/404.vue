<template>
  <div class="page404 noPadding">
    <p class="page404_p">
      Oooops! Sorry The Page Not Found:
    </p>
    <router-link to="/">
      <el-button>返回首页</el-button>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.page404 {
  width: 100%;
  height: 100%;
  background: url('../../assets/404img/img-404.png') no-repeat center center #b5c794;
  text-align: center;
  .page404_p {
    padding: 80px 0 20px 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
</style>
