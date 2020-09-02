Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        year: (new Date()).getFullYear()
    },
    methods: {
        yearInputHolder: function($event) {
            this.year = $event.target.value;
        }
    }
});