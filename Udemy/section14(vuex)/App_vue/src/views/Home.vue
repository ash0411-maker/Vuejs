<template>
  <div>
    <h3>HOME</h3>
    <hr>
    <h2>Vuex: {{ doubleCount }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCounter;
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
