<template>
  <div class="main">

    <button @click="myAnimation = 'slide'">slide</button>
    <button @click="myAnimation = 'fade'">fade</button>

    <p>{{ myAnimation }}</p>

    <button @click="show = !show">切り替えボタン</button>

    <transition
      :name="myAnimation"
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
      appear
    >
      <h2 v-if="show">HELLO</h2>
    </transition>

    <transition name="slide" type="animation" appear>
      <div v-if="show">
        <h2>BYE</h2>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: "slide"
    }
  }
}
</script>

<style scoped>
/* transitonのname属性に対応 */
/* 現れる状態 */
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 1s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}

/* 消える状態 */
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity 1s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}



.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  /* 現れる時のトランジションの状態 */
  animation: slide-in 0.5s;
  transition: opacity 1s;
}

.slide-leave-active {
  /* 消える時のトランジションの状態 */
  animation: slide-in 0.5 reverse;
  transition: opacity 1s;
}


@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX();
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
