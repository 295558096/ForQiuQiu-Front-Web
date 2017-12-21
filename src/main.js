// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-default/index.css'
// import 'babel-polyfill'
// import './res/css/reset.css'
// import './res/css/main.css'
import utilsFunction from './components/utils/function.js'
import globel from './globel.js'
Vue.use(ElementUI)
Vue.use(globel)
Vue.config.productionTip = false
Vue.prototype.utilsFunction = utilsFunction
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
window.onload = function () {
  let url = window.location.href // 获取url中"?"符后的字串
  if (url.indexOf('?') !== -1) { // 判断?后面是否有参数
    window.app.userId = getQueryString('userId')
  }
}

function getQueryString (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
// 重写on方法，不会重复注册事件
Vue.prototype.$on = function (event, fn) {
  let hookRE = /^hook:/
  let this$1 = this

  let vm = this
  if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      this$1.$on(event[i], fn)
    }
  } else {
    (vm._events[event] = []).push(fn)
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
      vm._hasHookEvent = true
    }
  }
  return vm
}
