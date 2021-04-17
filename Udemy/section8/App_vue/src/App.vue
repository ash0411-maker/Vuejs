<template>
  <div>
    <LikeHeaderLocal>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <template v-slot:like-number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeaderLocal>

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
