<template>
  <div style="width: 700px; margin: auto; padding-top: 70px;">
    <nav>
      <router-link
        to="/"
        active-class="link--active"
        exact
        class="link"
      >
      HOME
      </router-link>
      <router-link
        to="/users"
        active-class="link--active"
        exact
        class="link"
      >
      USERS
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
