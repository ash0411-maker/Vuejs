var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 算出 getter 関数
      reversedMessage: function () {
        // `this` は vm インスタンスを指します
        return this.message.split('').reverse().join('')
      }
    }
  })