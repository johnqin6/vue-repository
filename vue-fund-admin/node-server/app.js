const express = require('express');
const mongoose = require('mongoose');
const passport= require('passport');
const app = express();

// 引入路由文件
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');

// db配置
const db = require('./config/keys').mongoURI;

// 连接数据库服务器
mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => console.log('mongoDB connected'))
        .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.end('hello world');
});

//配置 express 使post请求可以拿到请求体的数据
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// passport 初始化， passport用于验证token
app.use(passport.initialize());

// 引入passport.js并传入passport包，如此就可以在passport.js使用passport
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/profiles', profiles);

// 设置端口，如果是开发环境使用3000端口
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('服务器已开启, 地址：http://localhost:3000');
});