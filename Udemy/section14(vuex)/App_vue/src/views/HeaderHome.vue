<template>
  <nav>
    <h2>HOMEのヘッダー</h2>
    <router-link
      to="/"
      active-class="link--active"
      exact
      class="link"
    >
    HOME
    </router-link>
    <router-link
      to="/users/1"
      active-class="link--active"
      exact
      class="link"
    >
    USERS
    </router-link>

    <button @click="increment">+1</button>
  </nav>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.count++;
    }
  }
}
</script>


<style scoped>
  .link {
    margin-right: 20px;
    background-color: limegreen;
  }

  .link--active {
    font-size: 20px;
  }
</style>
