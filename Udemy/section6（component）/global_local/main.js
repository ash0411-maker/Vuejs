// グローバル
Vue.component("global-component", {
  data: function() {
    return {
      number: 12
    }
  },
  template: "<p>{{ number }}いいね</p>"
})

new Vue({
  el: '#global'
})



// ローカル
var local_component = {
  data: function() {
    return {
      number: 12
    }
  },
  template: "<p>{{ number }}いいね</p>"
}

new Vue({
  el: '#local',
  components: {
    "local-component" : local_component
  }
})
