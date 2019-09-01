<template>
  <transition name="slide">
    hello disc
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters(['disc'])
  }
}
</script>
