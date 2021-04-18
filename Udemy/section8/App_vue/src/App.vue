<template>
  <div>
    <LikeHeaderLocal>
      <h2>こんにちは</h2>
    </LikeHeaderLocal>

    <LikeNumberGlobal :props-number="number" v-on:emit-number="number = $event"></LikeNumberGlobal>

    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
  </div>
</template>

<script>
import LikeHeaderLocal from './components/LikeHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
    }
  },
  components: {
    LikeHeaderLocal,
    Home,
    About
  }
}
</script>
