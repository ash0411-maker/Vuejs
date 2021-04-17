<template>
  <div>
    <LikeHeaderLocal>
      <h1>トータルのいいね数<br>親から子へHTMLごとデータを渡す（slot）</h1>
      <h2>いいね（{{ number }}）</h2>
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
