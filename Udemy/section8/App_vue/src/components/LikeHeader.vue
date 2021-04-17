<template>
  <div id="LikeHeaderLocal">
    <div>
      <slot name="title"></slot>
      <slot name="like-number"></slot>
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
