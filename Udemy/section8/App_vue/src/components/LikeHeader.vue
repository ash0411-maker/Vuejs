<template>
  <div id="LikeHeaderLocal">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
}
</script>


<style scoped>
#LikeHeaderLocal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: solid;
  margin-bottom: 20px;
}
</style>
