import Vue from 'vue'
import App from './App.vue'
import LikeNumberGlobal from './components/LikeNumber.vue'

 //グローバル登録。どこでも呼び出せる
Vue.config.productionTip = false
Vue.component("LikeNumberGlobal", LikeNumberGlobal)
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
