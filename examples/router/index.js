import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../docs/test.md')))
    },
    {
      path: '/uploadDialog',
      name: 'uploadDialog',
      component: r => require.ensure([], () => r(require('../docs/uploadDialog.md')))
    },
    {
      path: '/daterange',
      name: 'daterange',
      component: r => require.ensure([], () => r(require('../docs/daterange.md')))
    },
    {
      path: '/datetimerange',
      name: 'datetimerange',
      component: r => require.ensure([], () => r(require('../docs/datetimerange.md')))
    },
    {
      path: '/icon',
      name: 'icon',
      component: r => require.ensure([], () => r(require('../docs/icon.md')))
    }
  ]
})
