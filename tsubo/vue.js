Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})

var app = new Vue({
    el: '#app',
    data: {
        answer: "選択しください",
        options: [
            {code: "ans1", label: "初めて"},
            {code: "ans2", label: "週１"},
            {code: "ans3", label: "月１"},
            {code: "ans4", label: "半年"},
        ]
    },
});