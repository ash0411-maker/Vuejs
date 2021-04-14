var app = new Vue({
  el: '#app',
  data: {
      message: 'インスタンス2',
      name: 'ashketcham'
  },
  template: '<p>{{ message }}</p>'
})

// $dataでインスタンスのデータを一覧で取得できる
console.log(app.$data);
