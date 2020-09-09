var app = new Vue({
    el: '#app',
    data: {
      name: "スマホケース",
      price: 980
    },
    methods: {
      priceDown: function() {
        this.price -= 100
      }
    }
})