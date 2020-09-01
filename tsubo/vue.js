Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        stock: 10,
        message: ""
    },
    methods: {
        onDeleteItem: function() {
            this.stock--;
        }
    },
    // watch: {
    //     stock: function(newStock, oldStock) {
    //         if(newStock == 0) {
    //             this.message = "売り切れ";
    //         }
    //     }
    // },
    computed: {
        statusMessage: function() {
            if(this.stock <= 0) {
                return "売り切れ";
            }
            return "";
        }
    }
});