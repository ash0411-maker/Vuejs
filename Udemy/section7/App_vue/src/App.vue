<template>
  <div>
    <LikeHeaderLocal></LikeHeaderLocal>
    <p>いいね（{{ number }}）</p>
    <LikeNumberGlobal :number_props="number"></LikeNumberGlobal>
    <LikeNumberGlobal :number_props="number"></LikeNumberGlobal>
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
