var app = new Vue({
  el: '#app',
  data: {
      message: 'インスタンス2',
      name: 'ashketcham'
  },
  // 1行のhtmlで使う？？？
  template: '<p>{{ message }}</p>'
})

// $dataでインスタンスのデータを一覧で取得できる
console.log(app.$data);
