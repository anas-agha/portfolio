<template>
  <button
    v-motion
    :initial="{ scale: 0.6, opacity: 0, y: 20 }"
    :visible="{ scale: 1, opacity: 1, y: 0 }"
    class="my-btn"
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  percentage: {
    default: 1
  }
})
</script>
<style lang="scss">
.my-btn {
  text-transform: capitalize;
  background-color: transparent;
  color: var(--back-color);
  transition: color 0.3s;
  padding: 5px 10px;
  font-size: calc(22px * v-bind(percentage));
  font-weight: 900;
  outline: none;
  border: 3px solid var(--text-color);
  border-radius: 2px;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  user-select: none;

  &:hover {
    color: var(--active-color);
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--active-color);
    z-index: -1;
    transition: transform 0.6s;

    transform: scaleX(1);
    transform-origin: right;
  }
  &:hover::before {
    transition: transform 0.4s;
    transform: scaleX(0);
    transform-origin: left;
  }
}
@media (max-width: 991px) {
  .my-btn {
    font-size: calc(20px * v-bind(percentage));
  }
}
</style>
