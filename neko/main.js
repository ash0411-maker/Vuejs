var app = new Vue({
    el: '#app',
    data: {
        name: "",
        list: [
            {id: 1, name: "スライム", hp: "10"},
            {id: 2, name: "ゴーレム", hp: "30"},
            {id: 3, name: "キラーマシン", hp: "100"},
        ]
    },
    methods: {
        add: function() {
            var max = this.list.reduce(function(a, b){
                return a > b.id? a : b.id
            }, 0)

            this.list.push({
                id: max += 1,
                name: this.name,
                hp: 500
            })
        },
        input: function($event) {
            this.name = $event.target.value
        }
    }
})
