import Vue from 'vue'
import App from './App.vue'
import router from "./router"

 //グローバル登録。どこでも呼び出せる
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
