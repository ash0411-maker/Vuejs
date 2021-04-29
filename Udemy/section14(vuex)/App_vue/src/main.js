import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

 //グローバル登録。どこでも呼び出せる
Vue.config.productionTip = false

//  全てのページ遷移前に特定の処理を行う
// router.beforeEach((to, from, next) => {
//   next();
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
