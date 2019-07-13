# concurrently 前后端一起启动(连载)

1. 下载concurrently依赖
> cnpm i concurrently

2. 在前端项目的package.json进行如下配置

```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start": "npm run serve"
  },
```

3. 在后端项目的package.json进行如下配置

```json
 "scripts": {
    "client-install": "npm install --prefix client",
    "client": "npm start --prefix client",
    "start": "node app.js",
    "server": "nodemon app.js",
    "dev": "concurrently \"npm run serve\" \"npm run client\""
  },
```

4. 运行`npm run dev`