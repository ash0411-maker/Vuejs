var app = new Vue({
  el: '#app',
  data: {
      name: 'ashketcham'
  },
  render: function(createElement) {
    // createElementは「h」に置き換えてもいい
    // createElementの正体はVNode(仮想Nodeのこと)
    // ここでは直接DOMにアクセスしていない
    return  createElement("h1", "こんにちは" + this.name);
  }
})

// $dataでインスタンスのデータを一覧で取得できる
console.log(app.$data);
