// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 根据网址不同，返回不同的页面
// 多页应用缺点：首屏时间快（至一个http请求），页面切换慢
// 单页应用：删除当前页面，页面切换快，首屏时间慢。SEO只认识HTML中的内容，而单页应用是js渲染。SEO差
// fastclick 解决移动端点击延迟3秒
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
