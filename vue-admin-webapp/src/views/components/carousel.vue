<template>
  <div class="carousel">
    <el-card>
      <div slot="header">
        <span>轮播图</span>
      </div>
      <p class="pTitle">1、箭头切换</p>
      <el-carousel :interval="4000" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="textH3">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <p class="pTitle">2、卡片切换</p>
      <el-carousel :interval="4000" indicator-position="card">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="textH3">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>
<style>
.textH3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
