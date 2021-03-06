const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  identity: {
    type: String,
    required: true
  },
  createOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema)