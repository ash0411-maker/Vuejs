<template>
  <div id="LikeNumberGlobal">
    <h2>LikeNumberGlobal（どこでも使えるコンポーネント）</h2>
    <p>Vue.component("LikeNumberGlobal", LikeNumberGlobal) </p>
    <p>いいね（{{number}}）</p>
  </div>
</template>

<script>
export default {
  // data: function() { #ES5
  data() { //ES6
    return {
      number: 5
    }
  }
}
</script>


<style scoped>
#LikeNumberGlobal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: solid;
}
</style>
