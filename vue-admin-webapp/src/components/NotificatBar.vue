<template>
  <div class="notificatBar">
    <div class="cardBox">
      <div class="cardHead">
        <p class="title">消息中心</p>
        <i class="el-icon-close card-message-icon" @click="$store.commit('app/SET_MSGISOPEN')"></i>
      </div>
      <ul class="conUl">
        <li v-for="item in msgList" :key="item.id">
          <router-link :to="item.link" class="conUl_link">
            <span class="conUl_sp0">{{ item.content }}</span>
            <span class="conUl_sp1">{{ item.time }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msgLust: [
        {
          id: '1',
          content: '优惠券到期提醒',
          link: '',
          time: '2019-06-01'
        },
        {
          id: '2',
          content: '618大促，请查看活动具体信息',
          link: '',
          time: '2019-06-02'
        },
        {
          id: '3',
          content: '充值成功',
          link: '',
          time: '2019-07-02'
        },
        {
          id: '4',
          content: '密码充值成功！',
          link: '',
          time: '2019-07-02'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.cardBox {
  width: 100%;
  .cardHead {
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 50px;
    .title {
      float: left;
      color: #333;
      font-size: 16px;
    }
    i.card-message-icon {
      float: right;
      margin-top: 14px;
      font-size: 20px;
      color: #b3b3b3;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        color: #333;
      }
    }
  }
}

.conUl {
  li {
    height: 50px;
    line-height: 50px;
    .counUl_link {
      display: block;
      height: 100%;
      border-bottom: 1px solid #e4e4e4;
    }
    .conUl_sp0 {
      font-size: 14px;
    }
    .conUl_sp1 {
      float: right;
      font-size: 12px;
      color: #b3b3b3;
    }
  }
}
</style>
