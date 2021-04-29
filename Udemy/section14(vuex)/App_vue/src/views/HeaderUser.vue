<template>
  <nav>
    <h2>USERのヘッダー</h2>
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
</template>

<style scoped>
  .link {
    margin-right: 20px;
    background-color: limegreen;
  }

  .link--active {
    font-size: 20px;
  }
</style>
