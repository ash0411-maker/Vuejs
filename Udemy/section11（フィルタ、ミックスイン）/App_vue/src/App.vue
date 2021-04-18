<template>
  <div>
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  data() {
    return {
      currentComponent: "Home",
    }
  },
  components: {
    Home,
    About
  }
}
</script>
