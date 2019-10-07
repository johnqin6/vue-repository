# 服务器端渲染

## 服务器端渲染 和客户端渲染

服务器端渲染：后端先调用数据库，获得数据之后，将数据和页面元素进行拼装，组合成完整的html页面，在直接返回给浏览器，以便用户浏览。   

客户端渲染：数据由浏览器通过ajax动态取得，再通过js将数据填充到dom元素上最终展示到页面上，这样的过程叫做客户端渲染。

- 服务端渲染 VS 客户端渲染
  1. 服务器端渲染需要消耗更多的服务器资源(CPU,内存等)
  2. 客户端渲染可以将静态资源部署到cdn上，实现高并发
  3. 服务端渲染对SEO更友好

[vue服务器渲染官方文档](https://ssr.vuejs.org/zh/)

## vue服务端通用框架- nuxt.js

[官方文档](https://zh.nuxtjs.org/guide)

> 扩展知识点： npx v5.2.0 引入的一条命令(npx), 引入该命令目的是为了提升开发者使用包内提供的命令行工具的体验。    
- 使用示例
> npx create-react-app my-app  
> 相当于 npm install -g create-react-app
> create-react-app my-app

