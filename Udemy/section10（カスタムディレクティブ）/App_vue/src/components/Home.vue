<template>
  <h1 v-border:solid.round="{width: '10px', color: 'red'}">HOME</h1>
</template>

<script>
export default {
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem"
      }
    }
  }
}
</script>
