<template>
  <div style="width: 700px; margin: auto; padding-top: 70px;">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <!-- <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
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
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>
