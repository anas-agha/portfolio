<template>
  <div class="hero-section pattern">
    <div class="container">
      <div
        v-motion
        :initial="{ scale: 0.6, opacity: 0, y: 50 }"
        :visible="{ scale: 1, opacity: 1, y: 0 }"
        :duration="600"
        :dely="400"
        class="text"
      >
        <div class="main-text">
          <span>{{ $t('hi') }}</span>
          <span class="colored">{{ $t('name') }}</span>
          <span>{{ $t('and i am a') }}</span>
          <span class="colored">{{ currentTitle }}</span>
          <span class="cursor colored">|</span>
        </div>
        <div class="text-for-height-setting">
          <span
            >{{
              lang == 'ar'
                ? 'السلام عليكم أنا أنس طالب آغا و أنا مطور الواجهات الأمامية لمواقع الويب|'
                : 'Hi I am Anas Taleb Agha , and I am a front end developer|'
            }}
          </span>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 150 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="600"
          :dely="1000"
          class="call-to-action"
        >
          <router-link :to="{ name: 'contact' }"
            ><myBtn>{{ $t('hire me') }}</myBtn></router-link
          >
          <a href="https://jade-blondie-82.tiiny.site/" target="_blank"
            ><myBtn>{{ $t('download cv') }}</myBtn></a
          >
        </div>
      </div>
      <div class="image">
        <div
          v-motion
          :initial="{ scale: 0.6, opacity: 0, rotate: 30, y: -50 }"
          :visible="{ scale: 1, opacity: 1, rotate: 0, y: 0 }"
          :duration="600"
          class="image-container"
        >
          <img src="@/assets/anas taleb agha.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import myBtn from './myBtn.vue'
import { computed, ref } from 'vue'
import { mainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
const store = mainStore()
const lang = storeToRefs(store).lang
const currentTitle = ref('')
const titles = computed(() => {
  return lang.value == 'en'
    ? ['Front End Developer', 'Hard Worker', 'Fast Learner']
    : ['مطور الواجهات الأمامية لمواقع الويب', 'أعمل بجد', 'متعلم سريع']
})
const writeDuration = ref(300)
const deleteDuration = ref(80)
function titleChangeWrite(i, chrIndex, spd) {
  let index = i
  let charIndex = chrIndex
  let speed = spd
  setTimeout(() => {
    currentTitle.value = titles.value[index].substring(0, charIndex + 1)
    if (++charIndex < titles.value[index].length) {
      titleChangeWrite(index, charIndex, writeDuration.value)
    } else {
      setTimeout(() => {
        titleChangeDelete(index, charIndex - 1, deleteDuration.value)
      }, 3 * writeDuration.value)
    }
  }, speed)
}
function titleChangeDelete(i, chrIndex, spd) {
  let index = i
  let charIndex = chrIndex
  let speed = spd
  setTimeout(() => {
    currentTitle.value = titles.value[index].substring(0, charIndex)
    if (--charIndex != -1) {
      titleChangeDelete(index, charIndex, deleteDuration.value)
    } else {
      if (++index >= titles.value.length) {
        index = 0
      }
      setTimeout(() => {
        titleChangeWrite(index, 0, writeDuration.value)
      }, 3 * speed)
    }
  }, speed)
}
titleChangeWrite(0, 0, writeDuration.value)
// //////////////////// end method two for title chaging/////////////
</script>
<style lang="scss">
.hero-section {
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 60px);

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    direction: var(--dir);

    z-index: 1;
    position: relative;
    background-color: transparent;
    .text {
      background-color: transparent;
      width: 100%;
      position: relative;
      .main-text {
        position: absolute;
        inset: 0;
        background-color: inherit;
      }
      .main-text {
        position: absolute;
        inset: 0;
        background-color: inherit;
      }
      .text-for-height-setting {
        visibility: hidden;
      }
      .call-to-action {
        background-color: transparent;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
      }
    }
    span {
      font-size: 40px;
      font-weight: 900;
      background-color: transparent;
      text-shadow: 0px 0px 4px var(--text-color);

      &.colored {
        text-shadow: 0px 0px 4px var(--active-color);
        color: var(--active-color);
      }
      &.cursor {
        display: inline-block;
        margin: 0 3px;
        animation: cursor-anime 0.3s infinite linear alternate;
      }
    }
    .image {
      width: 100%;
      max-height: 100%;
      background-color: transparent;
      display: flex;
      justify-content: end;
      align-items: center;
      .image-container {
        margin: 6px;
        width: calc(90% - 12px);
        max-height: calc(100% - 12px);
        max-height: 100%;
        text-align: center;
        aspect-ratio: 1 / 1;
        display: flex;
        justify-content: end;
        align-items: center;

        position: relative;
        background-color: transparent;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 50%;
        }
        &::before {
          content: '';
          position: absolute;
          inset: -5px;
          background-image: conic-gradient(
            var(--active-color),
            #673ab7,
            var(--text-color),
            yellow,
            green,
            var(--active-color)
          );
          z-index: 0;
          overflow: hidden;
          border-radius: 50%;
          animation: rotate infinite 7s linear;
          aspect-ratio: 1 / 1;
        }
        &::after {
          content: '';
          position: absolute;
          inset: -6px;
          background-image: conic-gradient(
            var(--active-color),
            #673ab7,
            var(--text-color),
            yellow,
            green,
            var(--active-color)
          );
          z-index: -1;
          overflow: hidden;
          border-radius: 50%;
          filter: blur(20px);
          animation: rotate infinite 7s linear;
          aspect-ratio: 1 / 1;
        }
      }
    }
  }
}
@keyframes cursor-anime {
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0turn);
  }
  50% {
    scale: 1.02;
  }
  100% {
    scale: 1;
    transform: rotate(1turn);
  }
}
// @media (max-width: 991px) {
//   .hero-section {
//     overflow: auto;
//     overflow-x: hidden;
//     min-height: calc(100vh - 60px);
//     height: fit-content;
//   }
// }
@media (max-width: 991px) {
  .hero-section {
    overflow: auto;
    overflow-x: hidden;
    min-height: calc(100vh - 60px);
    height: fit-content;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-height: fit-content;
      .image {
        order: -1;
        justify-content: center;
      }
      .text {
        text-align: center;
        span {
          font-size: 30px;
        }
        .call-to-action {
          // button {
          //   font-size: 20px;
          // }
        }
      }
    }
  }
}
</style>
