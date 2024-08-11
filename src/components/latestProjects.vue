<template>
  <div class="latest-projects pattern">
    <div class="container">
      <sectionHeading :title="$t('latest projects')"></sectionHeading>
      <showProjects :projects="latestProjects"></showProjects>
      <router-link class="tr" :to="{ name: 'projects' }">
        <myBtn class="show-all">{{ $t('all projects') }}</myBtn>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import sectionHeading from './sectionHeading.vue'
import myBtn from './myBtn.vue'
import showProjects from './showProjects.vue'
import { mainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = mainStore()
const projects = storeToRefs(store).projects
const latestProjects = computed(() => projects.value.slice(0, 3))
</script>
<style lang="scss">
.latest-projects {
  width: 100%;
  .show-all {
    margin-top: 50px;
    margin: 50px auto 0;
    display: block;
    padding: 5px 20px;
  }
}
</style>
