Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        show: true
    },
    methods: {
        now1 :function() {
            return (new Date().toLocaleDateString());
        }
    },
    computed: {
        now2 :function() {
            return (new Date().toLocaleDateString());
        }
    }
});