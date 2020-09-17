new Vue({
    el: '#app',
    components: {
        "my-component" : myComponent
    },
    data: {
        num: 1
    },
    numberPlus: function() {
        num += 1
    }
})

