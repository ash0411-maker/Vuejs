import Vue from 'vue'
import App from './App.vue'
import LikeNumberGlobal from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component("LikeNumberGlobal", LikeNumberGlobal) //グローバル登録。どこでも呼び出せる
// Vue.directive("border", {
  // どのタイミングで実行したいかを設定するフック。bindとupdateをめっちゃ使う
  //   bind(el, binding, vnode) {
// ディレクティが初めて対象の要素に紐づいたとき
//   },
  // inserted() {
  //   // 親Nodeに挿入されたとき
  // },
  // update(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  // },
  // componentUpdated() {
  //   // コンポーネントが更新される度。子コンポーネントが更新された後
  // },
  // unbind() {
  //   // ディレクティが紐づいている要素から取り除かれたとき
  // },
// });

// bindとupdate用の省略記法
Vue.directive("border", function(el, binding) {

});

new Vue({
  render: h => h(App),
}).$mount('#app')
