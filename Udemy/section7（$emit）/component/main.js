// componentではdataを関数で定義する
// オブジェクトだと同じデータを参照してしまう。

Vue.component("like-component", {
  data: function() {
    return {
      number: 12
    }
  },
  template: "<p>{{ number }}いいね</p>"
})

new Vue({
  el: '#app'
})
