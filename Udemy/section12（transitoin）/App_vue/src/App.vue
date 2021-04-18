<template>
  <div class="main">
    <button @click="show = !show">切り替えボタン</button>

    <transition name="fade">
      <h2 v-if="show">HELLO</h2>
    </transition>
    <transition name="slide">
      <h2 v-if="show">BYE</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
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




.slide-enter-active {
  /* 現れる時のトランジションの状態 */
  animation: slide-in 0.5s;
}

.slide-leave-active {
  /* 消える時のトランジションの状態 */
  animation: slide-in 0.5s;
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
