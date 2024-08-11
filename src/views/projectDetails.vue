<template>
  <div class="project">
    <div v-if="project" class="container">
      <div class="project-main-image">
        <img :src="project.imgs[0]" />
      </div>
      <div class="text tr">
        <div class="name tr">
          <div class="property tr">{{ $t('project name') }}:</div>
          <div class="value tr">{{ project.name }}</div>
        </div>
        <div class="technologies tr">
          <div class="property tr">{{ $t('used technologies') }}:</div>
          <div class="value tr">
            <span
              v-for="(tech, index) in project.technologies"
              :key="tech"
              v-motion
              :initial="{ scale: 0, opacity: 0, rotate: 30, y: 20 }"
              :visible="{ scale: 1, opacity: 1, rotate: 0, y: 0 }"
              :delay="index * 300"
              >{{ tech }}</span
            >
          </div>
        </div>
        <a class="tr" :href="project.link"
          ><myBtn class="demo">{{ $t('demo') }}</myBtn></a
        >
      </div>
      <div class="images tr">
        <div class="property tr">{{ $t('project images') }}:</div>
        <div class="value tr">
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0.2, y: 50 }"
            :visible="{ scale: 1, opacity: 1, y: 0 }"
            :duration="400"
            v-for="img in project.imgs"
            :key="img"
          >
            <img :src="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
import myBtn from '@/components/myBtn.vue'
const projects = storeToRefs(mainStore()).projects
const routeId = useRoute().params.id
const index = computed(() => +routeId - 1)
const project = ref()
if (routeId <= projects.value.length) {
  project.value = projects.value[index.value]
}
onBeforeMount(() => {
  if (routeId > projects.value.length || isNaN(routeId)) {
    useRouter().push({ name: 'home' })
  }
})
</script>
<style lang="scss">
.project {
  .container {
    .project-main-image {
      img {
        width: 100%;
      }
    }
    .text {
      margin-top: 30px;
      direction: var(--dir);
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      gap: 40px;
      .name {
        font-size: 40px;
        font-weight: 900;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .technologies {
        .property {
          font-size: 30px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .value {
          display: flex;
          flex-wrap: wrap;
          direction: var(--dir);
          gap: 10px;
          margin-bottom: 20px;
          span {
            background-color: var(--active-color);
            color: var(--back-color);
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 16px;
            letter-spacing: 1px;
            font-weight: bold;
          }
        }
      }
      a.tr {
        .demo {
          display: block;
          margin: 0 auto;
          padding: 5px 30px;
          font-size: 30px;
        }
      }
    }
    .images {
      direction: var(--dir);
      margin-top: 40px;
      .property {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        text-transform: capitalize;
      }
      .value {
        text-align: center;
        img {
          max-width: 100%;
          max-height: 100%;
          margin-top: 20px;
          border-radius: 3px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .project {
    .container {
      .project-main-image {
        img {
          width: 100%;
        }
      }
      .text {
        margin-top: 30px;
        direction: var(--dir);
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .name {
          font-size: 30px;
          font-weight: 900;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
      }
    }
  }
}
</style>
