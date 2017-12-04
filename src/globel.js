export default {
    install (Vue) {
      var that = this
      Vue.mixin({
        created () {
          this.globel = that
        }
      })
      Vue.prototype.$isBlank = function (obj) {
        if (obj === null || obj === undefined || typeof obj === 'undefined' || (typeof obj === 'string' && obj.replace(/(\s*)/g, '') === '') || (obj instanceof Array && obj.length === 0)) {
          return true
        }
        return false
      }
    }
  }
  