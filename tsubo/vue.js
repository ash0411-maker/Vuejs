Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        arrival_date: null,
        min_date: null
    },
    created: function() {
        // 何も指定されなかった場合は現在の（デバイスに）設定されている時刻を取得する。
        var dt = new Date();
        dt.setDate(dt.getDate() + 1);
        this.arrival_date = this.formatDate(dt);
        this.min_date = this.arrival_date;
    },
    methods: {
        formatDate: function(dt) {
            var y = dt.getFullYear();
            var m = ("00" + (dt.getMonth() + 1)).slice(-2);
            var d = ("00" + dt.getDate()).slice(-2);
            console.log(d);
            var result = y + "-" + m + "-" + d;
            return result;
        }
    }
});