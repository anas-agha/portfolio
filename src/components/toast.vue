<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <teleport to="body">
    <transition name="toast">
      <div v-if="show" class="toast-content">{{ content }}</div>
    </transition>
  </teleport>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(['show', 'content'])
</script>
<style lang="scss" scoped>
// .toast-container {
.toast-content {
  position: fixed;
  bottom: 30px;
  left: 50%;
  translate: -50%;
  z-index: 30;
  direction: var(--dir);
  padding: 10px 15px;
  background-color: var(--active-color);
  color: var(--back-color);
  box-shadow: 0 0 20px 0px var(--text-color);
  font-size: 20px;
  border-radius: 3px;
  white-space: nowrap;
  max-width: 90%;
}
// }
.toast-enter-from,
.toast-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.toast-enter-to,
.toast-leave-from {
}
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
</style>
