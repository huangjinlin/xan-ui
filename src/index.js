import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import XanUI from './components'

Vue.use(ElementUI, { size: 'medium', locale })
Vue.use(XanUI, {tokenName: 'Authorization', tokenValue: ()=> ''})

export default function (Vue) {
}
