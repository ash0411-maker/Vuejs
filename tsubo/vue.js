Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        answer: []
    },
    computed: {
        section: function() {
            return this.answer.join()
        }
    }
});