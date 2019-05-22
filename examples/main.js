import '@babel/polyfill'
import 'flexible'
import Vue from 'vue'
import App from './app'
import router from './routers'
import JulyUI from '../src/index'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.use(JulyUI)

const requireComponent = require.context('./components', false, /[a-zA-Z]*\.vue/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})