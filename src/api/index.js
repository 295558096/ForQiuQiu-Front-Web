import axios from 'axios'
import qs from 'qs'
import { appKey, baseApiUrl } from './apiConfig'
// 增加响应拦截器
// var responseInterceptor =
axios.interceptors.response.use(function (response) {
  // Do something with response data
  var code = response.data.code
  if (code === '0000') {
    return response
  }
  switch (code) {
    case '0001':
      console.log('请登录后访问')
      window.app.$router.push({ name: 'login' })
      return
    default:
  }

  return response
}, function (error) {
  // Do something with response error
  window.app.$message({
    message: '服务器响应错误请联系管理员',
    type: 'warning'
  })
  return Promise.reject(error)
})

// 移除请求拦截器
// axios.interceptors.response.eject(responseInterceptor)

// axios(config)
export default {
  // get 请求
  get(url, params) {
    return axios.get(url, params)
  },
  // post 请求
  post (params) {
    if (typeof (params['caseId']) === 'undefined' || params['caseId'] === '') {
      let url = window.location.search // 获取url中"?"符后的字串
      if (url.indexOf('?') !== -1) { // 判断?后面是否有参数
        let reg = new RegExp('(^|&)' + 'caseId' + '=([^&]*)(&|$)')
        let r = window.location.search.substr(1).match(reg)
        params['caseId'] = unescape(r[2])
        let reg1 = new RegExp('(^|&)' + 'userId' + '=([^&]*)(&|$)')
        let r1 = window.location.search.substr(1).match(reg1)
        window.app.userId = unescape(r1[2])
      }
    }
    params['timestamp'] = new Date().getTime()
    params['sign'] = window.app.userId
    params['appKey'] = appKey
    let stringifiedParams = qs.stringify(params)
    return axios.post(baseApiUrl, stringifiedParams)
  }
}
