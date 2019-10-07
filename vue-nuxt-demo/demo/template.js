// 第一步：创建一个Vue实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello {{ name }}</div>`,
  data() {
    return {
      name: 'Vue.js'
    }
  }
})

const { createRenderer } = require('vue-server-renderer')

const renderer = createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

renderer.renderToString(app, (err, html) => {
  console.log(html, err) // html 将是注入应用程序内容的完整页面
})