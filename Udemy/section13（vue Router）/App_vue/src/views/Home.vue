<template>
  <div>
    <h3>HOME</h3>
    <button @click="toUsers">Users</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store
    }
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: 'users-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>
