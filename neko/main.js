new Vue({
    el: '#app',
    components: {
        "my-component" : myComponent
    },
    data: {
        win: 1
    },
    methods: {
        // 子から呼び出されるメソッド
        winning: function() {
            this.win += 1;
        }
    }
})