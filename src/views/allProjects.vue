<template>
  <div class="all-projects pattern">
    <div class="container">
      <sectionHeading :title="$t('projects')"></sectionHeading>
      <showProjects :projects="projects"></showProjects>
    </div>
  </div>
</template>
<script setup>
import sectionHeading from '@/components/sectionHeading.vue'
import showProjects from '@/components/showProjects.vue'
import { mainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
const store = mainStore()
const projects = storeToRefs(store).projects
</script>
<style lang="scss"></style>
