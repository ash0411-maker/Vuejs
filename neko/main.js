Vue.component('my-component', {
    //divタグで囲んでやる
    template: '<div><span>{{ team1 }}</span>：<span>{{ team2 }}</span></div>',
    data: function() {
       return {
           team1: "阪神",
           team2: "巨人"
       }
    }
})

new Vue({
    el: '#app'
})