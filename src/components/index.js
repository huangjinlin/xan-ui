import './iconfonts/iconfont.css' // 图标 css

import UploadDialog from './uploadDialog'
import Daterange from './daterange'
import Datetimerange from './datetimerange'
import Waves from './waves'
const components = [
  UploadDialog,
  Daterange,
  Datetimerange
]
const directives = [
  Waves
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  directives.forEach(directive => {
    Vue.directive(directive.name, directive)
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
