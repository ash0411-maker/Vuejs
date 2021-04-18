import Vue from 'vue'
import App from './App.vue'

 //グローバル登録。どこでも呼び出せる
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
