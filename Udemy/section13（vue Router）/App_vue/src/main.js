import Vue from 'vue'
import App from './App.vue'
import router from "./router"

 //グローバル登録。どこでも呼び出せる
Vue.config.productionTip = false

//  全てのページ遷移前に特定の処理を行う
// router.beforeEach((to, from, next) => {
//   next();
// })

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
