<template>
  <div>
    <h1>HOME</h1>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Filter Text",
      subTitle: "Fiter Sub Text"
    }
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },
    lowerCase(value) {
      return value.toLowerCase();
    },
  }
}
</script>
