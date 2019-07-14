# 米修在线后台管理系统  

练习搭建简单的vue后台管理系统流程。项目分为两部分，前端和后端，使用的技术栈为：     
- 前端---> vue全家桶(vue.js + vuex + vue-router + axios) + ElementUI框架
- 后端---> node.js(express框架) + mongodb(mongoose框架)数据库  

## 后端知识点：
- express搭建服务器
- mongoose操作mongodb数据库(增，删，改，查)
- 密码加密(使用`bcrypt`包对密码加密)
- 生成token,进行登录验证(使用`jst`包设置token, 使用`passport`和`passport-jwt`包验证token)
- 获取头像(使用`gravatar`获取头像)  

## 前端项目界面分析和知识点介绍：  
- 注册页面
  + ElementUI表单的使用和表单输入的验证
  + axios请求，响应拦截设置
- 登录页面
  + ElementUI表单的使用和表单输入的验证
  + axios请求，响应拦截设置
  + 获取后台传过来的token，解析token
  + 路由守卫
  + vuex中对解析的token的设置和删除
- 头部导航
  + ElementUI的Dropdown(下拉菜单)的使用
  + 获取从token中解析的用户数据
- 侧边导航
  + ElementUI NavMenu(导航菜单)的使用
- 信息管理页面
- 资金管理页面
  + ElementUI table(表格)的使用
  + 对数据进行增，删，编辑，筛选，分页操作  

## 项目中需关注的知识点：

- 密码的加密和验证
  1. 安装`bcrypt`     
  > yarn add bcrypt    

  2. 引入`bcrypt`    
  > const bcrypt = require('bcrypt')  

  3. 注册时使用`bcrypt`对密码加密  

  ```javascript
  // 密码加密
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err

      newUser.password = hash;
      newUser.save()
              .then(user => res.send(user))
              .catch(err => console.log(err))
    })
  })
  ```

  4. 登录时对密码进行验证

  ```javascript
   // 密码匹配
  bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const rule = { 
              id: user.id, 
              name: user.name,
              avatar: user.avatar,
              identity: user.identity 
            };
            res.send({ code: 1, message: '登录成功！'})
          } else {
            return res.status(400).send({ message: '密码错误！'})
          }
  ```

- token的生成和使用

  1. `passport`和`passport-jwt`的安装    
  ```
  > yarn add passport passport-jwt
  ```    

  2. 在app.js中引入passport，对其进行配置   

  ```javascript
  // app.js
  const passport= require('passport');
  // passport 初始化， passport用于验证token
  app.use(passport.initialize());

  // 引入passport.js并传入passport包，如此就可以在passport.js使用passport
  require('./config/passport')(passport);

  // 在config/passport.js文件中进行配置
  const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
  const mongoose = require('mongoose');
  const User = mongoose.model('users');
  const keys = require('../config/keys');

  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = keys.secretOrkey;

  module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
      User.findById(jwt_payload.id)
          .then(user => {
            if (user) {
              return done(null, user)
            }

            return done(null, false)
          })
          .catch(err => {
            console.log(err)
          })
    }))
  }

  ```

  3. 使用`passport`生成token  

  ```javascript
  // 设置token
  // jst.sign("规则", "加密名称", "过期时间", "箭头函数");
  jst.sign(rule, keys.secretOrkey,{ expiresIn: 3600}, (err, token) => {
    if (err) throw err
    res.send({
      message: 'success',
      token: 'Bearer ' + token
    })
  })
  ```  

  4. 使用`passport`验证token  

  ```javascript
  /**
   * $route GET api/users/current
  * @desc  return current user  验证token
  * @access private(私密的，只有令牌才能访问)
  */
  router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      identity: req.user.identity
    });
  })
  ```

  5. 在前端获取，解析token，并将token存储到vuex中

  ```javascript
  // 在login.vue页面获取token
  this.$axios.post('/api/users/login', this.loginUser)
  .then(res => {
    // 拿到token
    const { token } = res
    localStorage.setItem('eleToken', token)

    // 解析token
    const decode = jwt_decode(token)
    
    // 将token存储到vuex中
    this.$store.dispatch('setAuthenticated', !this.isEmpty(decode))
    this.$store.dispatch('setUser', decode)
    
    this.$router.push({ name: 'index' })
  })

  // 退出时删除保存的token信息
  // 清除token
  localStorage.removeItem('eleToken')
  this.$store.dispatch('clearCurrentState')

  // store.js 设置token
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  const types = {
    SET_AUTHENTICATED:'SET_AUTHENTICATED',
    SET_USER:'SET_USER'
  }

  const state = {
    isAuthebticated: false,
    user: {}
  }

  const getters = {
    isAuthebticated: state => state.isAuthebticated,
    user: state => state.user
  }

  const mutations = {
    // 设置是否授权
    [types.SET_AUTHENTICATED](state, isAuthebticated) {
      if (isAuthebticated) {
        state.isAuthebticated = isAuthebticated
      } else {
        state.isAuthebticated = false
      }
    },
    [types.SET_USER](state, user) {
      if (user) {
        state.user = user
      } else {
        state.user = {}
      }
    }
  }

  const actions = {
    setAuthenticated: ({ commit }, isAuthebticated) => {
      commit(types.SET_AUTHENTICATED, isAuthebticated)
    },
    setUser: ({ commit }, user) => {
      commit(types.SET_USER, user)
    },
    clearCurrentState: ({ commit }) => {
      commit(types.SET_AUTHENTICATED, false)
      commit(types.SET_USER, null)
    }
  }

  export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })

  ``` 
  
  6. 数据请求时设置统一头部（包含token）  

  ```javascript
  // 请求拦截
  axios.interceptors.request.use(config => {
    // 加载动画
    startLoading()

    if (localStorage.eleToken) {
      // 设置统一的请求header
      config.headers.Authorization = localStorage.eleToken;
    }
    return config
  },
  err => {

    return Promise.reject(err)
  })
  ```

  - 路由守卫

  ```javascript
  // 路由守卫
  router.beforeEach((to, from, next) => {
    const isLogin = localStorage.eleToken ? true : false
    if (to.path === '/login' || to.path === '/register') {
      next()
    } else {
      isLogin ? next() : next('/login')
    }
  })
  ```

## 页面效果  

[注册页面]('./images/register.png')    

[登录页面]('./images/login.png')

[主页]('./images/index.png')






