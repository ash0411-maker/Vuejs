Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        message: "これは一方通行のバインディング"
    },
    methods: {
        ha: function($event) {
            this.message = $event.target.value;
        }
    }
});