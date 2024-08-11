<template>
  <navBarVue />
  <whatsApp />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <myFooter></myFooter>
</template>
<script setup>
import myFooter from './components/myFooter.vue'
import navBarVue from './components/navBar.vue'
import whatsApp from './components/whatsApp.vue'
import { mainStore } from './stores/mainStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
// delay for mobile devices based on nav bar animation duration and delay
const store = storeToRefs(mainStore())
const themeNow = store.theme

function changeColors() {
  if (themeNow.value === 'light') {
    document.documentElement.style.setProperty('--back-color', 'white')
    document.documentElement.style.setProperty('--text-color', 'rgb(12, 12, 12)')
    document.documentElement.style.setProperty('--active-color', '#3F51B5')
    document.documentElement.style.setProperty('--second-color', '#f3f3f3')
    document.documentElement.style.setProperty('--red', '#b01409')
  } else {
    document.documentElement.style.setProperty('--back-color', 'black')
    document.documentElement.style.setProperty('--text-color', 'white')
    document.documentElement.style.setProperty('--active-color', '#00bcd4')
    document.documentElement.style.setProperty('--second-color', '#181818')
    document.documentElement.style.setProperty('--red', '#fd4235')
  }
}
changeColors()
watch(themeNow, changeColors)
const dir = store.dir
function setDir() {
  document.documentElement.style.setProperty('--dir', dir.value)
}
setDir()
watch(dir, setDir)
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap');
:root {
  /* --back-color: rgb(12, 12, 12); */
  --active-color: #00bcd4;
}

/* Override default Bootstrap container widths */
body {
  background-color: var(--back-color);
  overflow-x: hidden;
}
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  font-family: 'Cairo', sans-serif;
  font-optical-sizing: auto;
  font-variation-settings: 'slnt' 0;
  /* background-color: var(--back-color); */
  background-color: inherit;
  color: var(--text-color);
  text-decoration: none;
  /*transition: background-color 0.3s;*/
  -webkit-tap-highlight-color: transparent;
}
.tr {
  background-color: transparent;
}
.pattern {
  padding: 40px 0;
  /* width: 100%; */
  overflow: hidden;
  position: relative;
  background-color: transparent;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--text-color) 1px, transparent 1px),
      linear-gradient(to right, var(--text-color) 1px, transparent 1px);
    background-size: 30px 30px;
    background-position: center;
    opacity: 0.1;
    z-index: -1;
    background-attachment: fixed;
  }
}
::selection {
  background-color: var(--text-color);
  color: var(--back-color);
}
.container {
  width: 100%; /* Default for all screen sizes */
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  background-color: transparent;
  /* overflow-x: hidden; */
}

@media (min-width: 576px) {
  .container {
    max-width: 540px; /* Width for small screens */
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px; /* Width for medium screens */
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px; /* Width for large screens */
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px; /* Width for extra large screens */
  }
}
/* route transition */
.route-enter-from {
  transform: translateY(-100px);
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease;
}
.route-enter-to {
}
.route-leave-from {
}
.route-leave-active {
  transition: all 0.3s ease;
}
.route-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
/* scroll bar customizing */
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--back-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--active-color);
  border-radius: 3px;
}
</style>
