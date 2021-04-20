<template>
  <div>
    <label for="title">タイトルフォーム</label>
    <input
      type="text"
      id="title"
      :value="eventDataTitle"
      @input="$emit('input', $event.target.value)"
    >
    <p>インプット文字: {{eventDataTitle}}</p>
  </div>
</template>

<script>
export default {
  props: ["eventDataTitle"]
}
</script>
