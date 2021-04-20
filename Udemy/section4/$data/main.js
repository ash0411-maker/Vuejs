var app = new Vue({
  el: '#app',
  data: {
      message: 'インスタンス2',
      name: 'ashketcham'
  },
  methods: {
    changeMessage: function() {
      app.message = "変えてやった"
    }
  },
  computed: {
    myData: function() {
      return this.$data
    }
  }
})

// $dataでインスタンスのデータを一覧で取得できる
console.log(app.$data);
