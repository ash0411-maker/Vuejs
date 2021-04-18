<template>
  <div>
    <h2>イベントのフォーム</h2>
    <label for="title">タイトルフォーム</label>
    <input
      type="text"
      id="title"
      v-model.lazy="eventData.title"
    >
    <p>インプット文字: {{eventData.title}}</p>
  </div>
</template>

<script>


export default {
  data() {
    return {
      number: 10,
      eventData: {
        title: ""
      }
    }
  }
}
</script>
