<template>
  <div id="LikeNumberGlobal">
    <h2>LikeNumberGlobal（どこでも使えるコンポーネント）</h2>
    <p>いいね（{{number_props / 2}}）</p>
  </div>
</template>

<script>
export default {
  props: ["number_props"],
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
