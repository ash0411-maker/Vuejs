<template>
  <div id="LikeHeaderLocal">
    <div>
      <slot name="title" v-bind:user="user"></slot>
      <slot name="like-number"></slot>
    </div>
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
