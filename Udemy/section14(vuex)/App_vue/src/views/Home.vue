<template>
  <div>
    <h3>HOME</h3>
    <hr>
    <h2>Vuex: {{ doubleCount }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  // computed: {
  //   doubleCount() {
  //     return this.$store.getters.doubleCounter;
  //   }
  // },
  computed: mapGetters(["doubleCount"]),
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
