/**
 * 资金管理信息页面
 */
const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const passport = require('passport');



/**
 * $route GET api/profiles/add
 * @desc  创建信息接口
 * @access private(私密的，只有令牌才能访问)
 */
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const profileFields = {};

  if (req.body.type) profileFields.type = req.body.type;
  if (req.body.descript) profileFields.descript = req.body.descript;
  if (req.body.income) profileFields.income = req.body.income;
  if (req.body.expend) profileFields.expend = req.body.expend;
  if (req.body.cash) profileFields.cash = req.body.cash;
  if (req.body.remark) profileFields.remark = req.body.remark;
  
  new Profile(profileFields).save().then(profile => {
    res.send({ code: 1, message: '新增成功!'})
  })
  .catch(err => {
    res.send({ code: 0, message: err })
  })
})

/**
 * $route GET api/profiles/edit
 * @desc  编辑信息接口
 * @access private(私密的，只有令牌才能访问)
 */
router.post('/edit/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const profileFields = {};

  if (req.body.type) profileFields.type = req.body.type;
  if (req.body.descript) profileFields.descript = req.body.descript;
  if (req.body.income) profileFields.income = req.body.income;
  if (req.body.expend) profileFields.expend = req.body.expend;
  if (req.body.cash) profileFields.cash = req.body.cash;
  if (req.body.remark) profileFields.remark = req.body.remark;
  
  Profile.findOneAndUpdate({
    _id: req.params.id
  },{
    $set: profileFields
  },{
    new: true
  })
  .then(doc => res.send({ code: 1, data: doc}))
})


/**
 * $route GET api/profiles
 * @desc  获取所有信息
 * @access private(私密的，只有令牌才能访问)
 */
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.find()
  .then(docs => {
    if (!docs) {
      return res.status(404).send({ code: 0, message: '没有任何信息'})
    }
    res.send({ code: 1, data: docs })
  })
  .catch(err => res.status(404).send(err))
})

/**
 * $route GET api/profiles/:id
 * @desc  获取单条信息
 * @access private(私密的，只有令牌才能访问)
 */
router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findById({_id: req.params.id})
  .then(docs => {
    if (!docs) {
      return res.status(404).send({ code: 0, message: '没有任何信息'})
    }
    res.send({ code: 1, data: docs })
  })
  .catch(err => res.status(404).send(err))
})

/**
 * $route DELETE api/profiles/delete/:id
 * @desc  删除单条信息
 * @access private(私密的，只有令牌才能访问)
 */
router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOneAndDelete({ _id: req.params.id })
        .then(() => res.send({ code: 1, message: '删除成功！'}))
        .catch(err => res.status(404).send('删除失败！'))
})

module.exports = router;