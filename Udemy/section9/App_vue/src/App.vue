<template>
  <div>
    <h2>イベントのフォーム</h2>
    <EventTitle v-model="eventData.title"></EventTitle>


    <label for="title">最大人数</label>
    <input
      type="number"
      id="maxNumber"
      v-model.number="eventData.maxNumber"
    >
    <p>インプット文字: {{ eventData.maxNumber}}</p>

    <label for="title">最大人数</label>
    <input
      type="text"
      id="host"
      v-model.trim="eventData.host"
    >
    <p>インプット文字: {{ eventData.host}}</p>

    <label for="detail">イベントの内容</label>
    <textarea
      id="detail"
      cols="30"
      rows="10"
      v-model="eventData.detail"
    >
    </textarea>
    <pre>インプット文字: {{ eventData.detail}}</pre>
  </div>
</template>

<script>
import EventTitle from "./components/EventTitle.vue"

export default {
  data() {
    return {
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: ""
      }
    }
  },
  components: {
    EventTitle,
  }
}
</script>
