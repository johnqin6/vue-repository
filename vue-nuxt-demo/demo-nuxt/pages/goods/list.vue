<template>
  <div class="goods-list">
    <h2>商品列表页面</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`/goods/detail/${item.id}`">
          {{ item.name }} --> {{ item.price }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        { id: '1001', name: '汽车', price: '20000' },
        { id: '1002', name: '手机', price: '1000' },
        { id: '1003', name: '电脑', price: '500' }
      ]
    }
  }
}
</script>