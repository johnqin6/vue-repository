const path = require("path")
module.exports = {
  publicPath: '',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com',
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      "/uqq": {
        target: 'https://u.y.qq.com',
        headers: {
          referer: 'https://u.y.qq.com/',
          host: 'u.y.qq.com'
        },
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/uqq': ''
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 这个是加上自己的路径，
        // 注意：试过不能使用别名路径
        path.resolve(__dirname, "./src/assets/css/less/variable.less")
      ]
    }
  }
}
