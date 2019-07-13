const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建Schema
const ProfileSchema = new Schema({
  type: {
    type: String,
  },
  descript: {
    type: String
  },
  income: { // 收入
    type: String,
    required: true
  },
  expend: { // 支出
    type: String,
    required: true
  },
  cash: { // 金额
    type: String,
    required: true
  },
  remark: { // 备注
    type: String,
  },
  createOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)