<template>
  <div></div>
</template>
<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

onBeforeMount(() => {
  useRouter().push({ name: 'home' })
})
</script>
