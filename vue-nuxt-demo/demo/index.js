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

// 第二步：创建一个renderer
const renderer = require('vue-server-renderer').createRenderer()

// 第三步：将vue实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">Hello Vue.js</div>
})
