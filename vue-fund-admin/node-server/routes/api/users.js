/**
 * @login & register
 */
const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const jst = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

/**
 * $route GET api/users/test
 * @desc 返回的请求的json数据
 * @access public
 */
router.get('/test', (req, res) => {
  res.json({ msg: "test success"});
});

/**
 * $route POST api/users/register
 * @desc  返回的请求的json数据
 * @access public
 */
router.post('/register', (req, res) => {
  // 查询邮箱数据库中是否已存在
  User.findOne({email: req.body.email})
      .then(user => {
        if (user) res.status(400).json({message: '邮箱已被注册'})

        // 获取头像
        const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar: avatar,
          identity: req.body.identity
        })

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

      })
})


/**
 * $route POST api/users/login
 * @desc  返回token  jwt  passport
 * @access public
 */
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // 查询数据库
  User.findOne({email})
      .then(user => {
        if (!user) res.status(400).send({ message: '用户不存在'})

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
                  // 设置token
                  // jst.sign("规则", "加密名称", "过期时间", "箭头函数");
                  jst.sign(rule, keys.secretOrkey,{ expiresIn: 30}, (err, token) => {
                    if (err) throw err
                    res.send({
                      message: 'success',
                      token: 'Bearer ' + token
                    })
                  })
                  
                } else {
                  return res.status(400).send({ message: '密码错误！'})
                }
                
              })
      })
})

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

module.exports = router;