<template>
  <div class="projects tr">
    <div
      v-motion
      :initial="{ scale: 0.9, opacity: 0, y: 50 }"
      :visible="{ scale: 1, opacity: 1, y: 0 }"
      :duration="300"
      :transition="{
        type: 'linear'
      }"
      v-for="(project, index) in projects"
      :key="index"
      class="project"
    >
      <div class="project-container tr">
        <div class="number">{{ index + 1 }}</div>
        <div class="image-container">
          <img :src="`/assets/projects/${project.imgs[0]}`" alt="" />
        </div>
        <div class="text">
          <div class="project-title">{{ project.name }}</div>
          <div class="technologies tr">
            <span v-for="(tech, i) in project.technologies.slice(0, 2)" :key="i">{{ tech }}</span>
            <span>more in details</span>
          </div>
          <div class="call-to-action tr">
            <router-link class="tr" :to="{ name: 'project', params: { id: index + 1 } }">
              <myBtn percentage="0.8">{{ $t('details') }}</myBtn>
            </router-link>
            <a class="tr" target="_blank" :href="project.link">
              <myBtn percentage="0.8">{{ $t('demo') }}</myBtn>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import myBtn from './myBtn.vue'
import { defineProps, computed } from 'vue'
import { mainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
// eslint-disable-next-line no-unused-vars
const props = defineProps(['projects'])
const store = mainStore()
const theme = storeToRefs(store).theme
const shadowColor = computed(() => (theme.value == 'light' ? '#ffffff66' : '#00000054'))
const techColor = computed(() => (theme.value == 'dark' ? '#00bcd4b3' : '#3f51b5cc'))
</script>
<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(331px, 1fr));
  gap: 20px;
  direction: var(--dir);
  grid-auto-rows: 1fr;
  .project {
    position: relative;
    background-color: transparent;
    padding: 3px;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .project-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      background-color: var(--second-color);
      z-index: 2;
      position: relative;
      // border: 3px solid var(--text-color);
      border-radius: 3px;
      overflow: hidden;

      .number {
        position: absolute;
        top: -3px;
        border-bottom-left-radius: 3px;
        // border-bottom-right-radius: 3px;
        left: 10%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        // line-height: 3;
        font-size: 25px;
        font-weight: bold;
        color: var(--active-color);
        z-index: 1;
        &::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 100%;
          border-color: v-bind(shadowColor) transparent transparent v-bind(shadowColor);
          transform: scaleX(0.5);
          transition: transform 0.3s;
          transform-origin: left center;
          border-style: solid;
          width: 0;
          height: 0;
          border-width: 24px;
          display: block;
          z-index: -1;
        }
      }
      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
          width: 100%;
          object-fit: cover;
          object-position: left;
          aspect-ratio: 16/8.5;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }
      }
      .text {
        padding: 10px 15px 15px;
        background-color: var(--second-color);
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .project-title {
          padding-bottom: 15px;
          text-align: center;
          background-color: inherit;
          font-size: 25px;
          font-weight: bold;
          text-transform: capitalize;
        }
        .technologies {
          display: flex;
          flex-wrap: wrap;
          direction: var(--dir);
          gap: 10px;
          margin-bottom: 20px;
          span {
            background-color: v-bind(techColor);
            color: var(--back-color);
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 12px;
            letter-spacing: 1px;
            font-weight: bold;
          }
        }
        .call-to-action {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          direction: var(--dir);
          margin-top: auto;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      inset: -33%;
      background-image: conic-gradient(
        from 0deg,
        transparent 0%,
        var(--text-color) 25%,
        var(--text-color) 50%,
        transparent 50%,
        var(--active-color) 75%,
        var(--active-color) 100%
      );
      animation: rotate 30s linear infinite;
      // z-index: -1;
    }
    &:hover {
      .number::before {
        transform: scaleX(1);
      }
      img {
        transform: scale(1.1) rotate(1deg);
        opacity: 0.6;
      }
    }
  }
}
@keyframes rotate {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
@media (max-width: 991px) {
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
