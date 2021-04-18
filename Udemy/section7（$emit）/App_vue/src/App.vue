<template>
  <div>
    <LikeHeaderLocal></LikeHeaderLocal>
    <p>いいね（{{ number }}）</p>
    <LikeNumberGlobal :props-number="number" v-on:emit-number="number = $event"></LikeNumberGlobal>
    <LikeNumberGlobal v-on:emit-number="number = $event"></LikeNumberGlobal>
  </div>
</template>

<script>
import LikeHeaderLocal from './components/LikeHeader.vue'

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeaderLocal
  }
}
</script>
