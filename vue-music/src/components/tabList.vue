<template>
  <ul class="tab-list">
    <li class="tab-item"
      @click="chooseItem(index)"
      v-for="(item, index) in tabList" :key="index">
      <span :class="{'active': showLine && index === tabIndex}">
        {{ item.name }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tab-list',
  props: {
    tabList: {
      type: Array,
      default: () => {
        return []
      }
    },
    showLine: {
      type: Boolean,
      default: true
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      tIndex: 0
    }
  },
  methods: {
    chooseItem (index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-list {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  background-color: @color-background;
  .tab-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
    .active {
      display: inline-block;
      height: 36px;
      border-bottom: 2px solid @color-theme;
      color: @color-theme;
    }
  }
}
</style>
