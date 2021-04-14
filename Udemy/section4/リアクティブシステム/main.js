var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'インスタンス1'
    }
})

app1.message = "書き換えた！"

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'インスタンス2'
    },
    methods: {
        changeMessage1: function() {
            app1.message = "変えてやった"
        }
    }
})
