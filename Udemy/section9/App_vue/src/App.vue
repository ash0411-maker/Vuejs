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

    <label for="title">最大人数</label>
    <input
      type="number"
      id="maxNumber"
      v-model.number="eventData.maxNumber"
    >
    <p>インプット文字: {{ eventData.maxNumber} }</p>
  </div>
</template>

<script>


export default {
  data() {
    return {
      number: 10,
      eventData: {
        title: "",
        maxNumber: 0
      }
    }
  }
}
</script>
