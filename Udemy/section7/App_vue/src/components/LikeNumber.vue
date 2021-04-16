<template>
  <div id="LikeNumberGlobal">
    <h2>LikeNumberGlobal（どこでも使えるコンポーネント）</h2>
    <p>全力いいね（{{ propsNumber }}）</p>
    <p>半分いいね（{{ halfNumber }}）</p>
  </div>
</template>

<script>
export default {
  props: ["propsNumber"],
  computed: {
    halfNumber() {
      return this.propsNumber / 2;
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
