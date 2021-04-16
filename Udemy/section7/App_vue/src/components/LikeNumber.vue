<template>
  <div id="LikeNumberGlobal">
    <h2>LikeNumberGlobal（どこでも使えるコンポーネント）</h2>
    <p>全力いいね（{{ propsNumber }}）</p>
    <p>半分いいね（{{ halfNumber }}）</p>
    <button @click="increment">増やす</button>
  </div>
</template>

<script>
export default {
  // props: ["propsNumber"],
  props: {
    propsNumber: {
      type: Number,
      default: 100, //required: trueとは一緒に使えない
      // required: true //空じゃ無いことが必須
    },
  },
  computed: {
    halfNumber() {
      return this.propsNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("emit-number", this.propsNumber + 1);
      // this.$emit("渡すデータの名前", "渡すデータ自身");
    }
  }
}
</script>


<style scoped>
#LikeNumberGlobal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: solid;
}
</style>
