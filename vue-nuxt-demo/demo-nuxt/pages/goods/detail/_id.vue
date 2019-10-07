<template>
  <div class="goods-detail">
    商品id: {{ $route.params.id }}
    <p>
      {{ detailData.name }} --> {{ detailData.price }}
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    console.log(params, 11)
    const res = await axios.get('/data/goods.json')
    console.log(res)
    return {
      detailData: res.data
    }
  }
}
</script>