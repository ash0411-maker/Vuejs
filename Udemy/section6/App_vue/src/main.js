import Vue from 'vue'
import App from './App.vue'
import LikeNumberGlobal from './LikeNumber.vue'

Vue.config.productionTip = false
Vue.component("LikeNumberGlobal", LikeNumberGlobal) //グローバル登録。どこでも呼び出せる

new Vue({
  render: h => h(App),
}).$mount('#app')
