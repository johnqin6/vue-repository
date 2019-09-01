<template>
  <div class="music-list">
    <div class="back" @click="back">
      <i class="icon-back"></i>
    </div>
    <h2 class="title" v-html="title"></h2>
    <div class="bg-image" ref="bgImage" :style="bgStyle">
      <div class="play-wrapper">
        <div class="play" ref="playBtn" v-show="songs.length > 0">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <q-scroll>
      <div class="song-list-wrapper">
        <!-- <song-list></song-list> -->
      </div>
      <div class="loading-container">
        <loading></loading>
      </div>
    </q-scroll>
  </div>
</template>
<script>
export default {
  
}
</script>