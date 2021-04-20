<template>
  <div>
    <h3>HOME</h3>
    <button @click="toUsers">Users</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push("/users");
    }
  }
}
</script>
