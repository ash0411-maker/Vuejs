<template>
  <div id="LikeHeaderLocal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fName: "Jack",
        lName: "Potter"
      }
    }
  }
}
</script>


<style scoped>
#LikeHeaderLocal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: solid;
  margin-bottom: 20px;
}
</style>
