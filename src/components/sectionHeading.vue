<template>
  <div
    v-motion
    :initial="{ scale: 0.6, opacity: 0, y: 150 }"
    :visible="{ scale: 1, opacity: 1, y: 0 }"
    :duration="600"
    class="section-heading tr"
  >
    <h2 class="tr">{{ title }}</h2>
    <!-- <h2>{{ title }}</h2> -->
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps(['title'])
</script>
<style lang="scss">
.section-heading {
  text-align: center;
  // position: relative;
  h2 {
    text-align: center;
    font-size: 50px;
    padding-bottom: 40px;
    text-transform: uppercase;
    position: relative;
    text-shadow: 1px 1px 6px var(--text-color);
  }
  // h2:nth-child(2){
  //     text-align: center;
  //     font-size: 50px;
  //     padding-bottom: 40px;
  //     text-transform: uppercase;
  //     color: red;
  //     position: absolute;
  //     top: 0;
  //     left: 50%;
  //     transform: translateX(-50%);
  // }
}
@media (max-width: 500px) {
  .section-heading {
    h2 {
      text-align: center;
      font-size: 40px;
      padding-bottom: 40px;
      text-transform: uppercase;
      position: relative;
      text-shadow: 1px 1px 6px var(--text-color);
    }
  }
}
@media (max-width: 400px) {
  .section-heading {
    h2 {
      text-align: center;
      font-size: 35px;
      padding-bottom: 40px;
      text-transform: uppercase;
      position: relative;
      text-shadow: 1px 1px 6px var(--text-color);
    }
  }
}
</style>
