import Vue from 'vue'
import App from './App.vue'
import { axios_instance } from './util/axios'

// 挂载在vue上
Vue.prototype.$axios = axios_instance

Vue.config.productionTip = false

new Vue({
  // 运行时,系统会自动传递一个函数给 render,此函数会赋值给h,然后h(App)使用函数传入App模板来显示
  render: h => h(App),
}).$mount('#app')

// $mount 挂载 在 id="app"的标签上
// 在index.html中
