<template>
  <div style="width: 700px; margin: auto; padding-top: 70px;">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/users">USERS</router-link>
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
