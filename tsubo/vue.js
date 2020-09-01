Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    created: function(){
        addEventListener("resize", this.resizeHandler);
    },
    beforeDestroy: function() {
        removeEventListener("resize", this.resizeHandler);
    },
    methods: {
        resizeHandler: function() {
            this.width = $event.target.innerWidth;
            this.height = $event.target.innerHeight;
        }
    }
});