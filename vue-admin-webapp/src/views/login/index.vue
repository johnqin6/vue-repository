<template>
  <div class="login">
    <div class="slideShadow" v-show="showSlide">
      <transition>
        <div class="slideSty animated bounce">
          <slide-verify
            @success="onSuccess"
            @fail="onFail"
            :sliderText="text"
            :w="350"
            :h="175"
            ref="slideDiv"
          ></slide-verify>
          <div class="iconBtn">
            <i class="el-icon-circle-close" @click="showSlide = false"></i>
            <i class="el-icon-refresh" @click="refresh"></i>
          </div>
        </div>
      </transition>
    </div>
    <div class="loginBox">
      <h2 class="loginH2">Vue后台管理系统</h2>
      <div class="loginCon">
        <div class="titleDiv">
          <h3>Sign Up now</h3>
          <p>Enter your username and password to log on:</p>
          <i class="el-icon-key"></i>
        </div>
        <el-form ref="loginForm" :rule="rules" :model="ruleForm">
          <el-form-item prop="user">
            <el-input
              placeholder="请输入账户"
              prefix-icon="el-icon-user"
              v-model="ruleForm.user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="ruleForm.password"
              show-password
            ></el-input>
            <el-button
              @click="loginYz('loginForm')"
              type="primary"
              class="loginBtn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import SlideVerify from '@/components/SlideVerify'

export default {
  data () {
    return {
      showSlide: true,
      text: '向右滑动',
      notifyObj: null,
      ruleForm: {
        user: 'admin',
        password: '123456'
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在3到5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSuccess () {
      this.showSlide = false
    },
    onFail () {
      this.$message.error('验证失败')
    },
    refresh () {
      this.$refs.slideDiv.reset()
    },
    loginYz (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.showSlide = true
        }
      })
    },
    showTip () {
      this.notifyObj = this.$notify({
        title: '提示',
        message: '目前有两个登陆角色，管理员和普通用户，账号分别为：admin、user,密码都为：123456',
        duration: 0,
        iconClass: 'el-icon-s-opportunity'
      })
    }
  },
  components: {
    SlideVerify
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/pageBg/loginBg.jpg');
  background-size: 100% 100%;
  overflow: hidden;
}
.loginBox {
  position: relative;
  top: 50%;
  width: 550px;
  height: 455px;
  margin: 0 auto;
  margin-top: -287px;
}
.loginH2 {
  font-size: 38px;
  color: #fff;
  text-align: center;
}
.loginCon {
  border-radius: 4px;
  margin-top: 30px;
  background: #eee;
  .titleDiv {
    position: relative;
    height: 120px;
    padding: 0 28px;
    border-radius: 4px 44px 0 0;
    background: #fff;
    h3 {
      padding-top: 23px;
      color: #555;
      font-size: 22px;
      font-weight: initial;
    }
    p {
      padding-top: 12px;
      color: #888;
      font-size: 16px;
    }
    i {
      font-size: 65px;
      color: #ddd;
      position: absolute;
      right: 27px;
      top: 29px;
    }
  }
  .el-form {
    padding: 25px 25px 30px 25px;
    background: #eee;
    border-radius: 0 0 4px 4px;
  }
}
.loginBtn {
  width: 100%;
  background: #19b9e7;
}

.slideShadow {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.slideSty {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  height: 311px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-left: -188px;
  margin-top: -176px;
  background: #e8e8e8;
  z-index: 99;
}
.iconBtn {
  padding: 9px 0 0 19px;
  border-top: 1px solid #d8d8d8;
  margin-top: 17px;
  i {
    font-size: 22px;
    cursor: pointer;
  }
  i:last-child {
    margin-left: 7px;
  }
}
</style>
<style>
.slideSty .slide-verify {
  width: 350px !important;
  margin: 13px auto 0 auto;
}
.slideSty .slide-verify-slider {
  width: 100% !important;
}
.slideSty .slide-verify-refresh-icon {
  display: none;
}
</style>
