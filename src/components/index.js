import './iconfonts/iconfont.css' // 图标 css

import UploadDialog from './uploadDialog'

const components = [
  UploadDialog
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$XAN = {
    tokenName: opts.tokenName,
    tokenValue: opts.tokenValue
  }
}

export default {
  version: '0.0.1',
  install
}
