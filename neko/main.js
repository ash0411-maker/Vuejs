new Vue({
    el: '#app',
    components: {
        "my-component" : myComponent
    },
    data: {
        list: [
            {id: 1, name: "スライム", hp: 100},
            {id: 2, name: "ドラゴン", hp: 10},
            {id: 3, name: "ゴーレム", hp: 20}
        ]
    }
})