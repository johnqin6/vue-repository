<template>
  <div class="app-wrapper">
    <headerBar></headerBar>

    <!-- main -->
    <router-view class="main-container"></router-view>
    
    <footerBar></footerBar>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { headerBar, footerBar } from './index';

export default {
  name: 'layout',
  components: {
    headerBar,
    footerBar
  }
}
</script>