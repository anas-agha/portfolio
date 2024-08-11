<template>
  <div class="my-skills">
    <div class="container">
      <sectionHeading :title="$t('my skills')"></sectionHeading>
      <div class="skills">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          v-motion
          :initial="{ scale: 0.9, opacity: 0, y: i % 2 == 0 ? 50 : -50 }"
          :visible="{ scale: 1, opacity: 1, y: 0 }"
          :duration="500"
          :transition="{
            type: 'linear'
          }"
          class="skill-box"
        >
          <div class="skill-box-container">
            <div class="skill-icon">
              <img :src="skill.img" :alt="skill.text" />
            </div>
            <div class="skill-text">{{ skill.text }}</div>
          </div>
          <div class="back-border"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import nuxtImage from '@/assets/skills/nuxt.svg'
import vueImage from '@/assets/skills/vue.svg'
import vuetifyImage from '@/assets/skills/vuetify.svg'
import piniaImage from '@/assets/skills/pinia.svg'
import javascriptImage from '@/assets/skills/javascript.svg'
import bootstrapImage from '@/assets/skills/bootstrap.svg'
import cssImage from '@/assets/skills/css.svg'
import html5Image from '@/assets/skills/html5.svg'
import php_lightImage from '@/assets/skills/php_light.svg'
import php_darkImage from '@/assets/skills/php_dark.svg'
import csharpImage from '@/assets/skills/csharp.svg'

import sectionHeading from '../components/sectionHeading.vue'
import { mainStore } from '../stores/mainStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = mainStore()
const theme = storeToRefs(store).theme
// const skillBoxBack = computed(() => (theme.value == 'light' ? '#f3f3f3' : '#181818'))
const skills = computed(() => {
  // if (theme.value == 'light') {
  return [
    {
      img: nuxtImage,
      text: `Nuxt Js`
    },
    {
      img: vueImage,
      text: `Vue Js`
    },
    {
      img: vuetifyImage,
      text: `Vuetify`
    },
    {
      img: piniaImage,
      text: `Pinia`
    },
    {
      img: javascriptImage,
      text: `JavaScript`
    },
    {
      img: bootstrapImage,
      text: `Bootstrap`
    },
    {
      img: cssImage,
      text: `CSS`
    },
    {
      img: html5Image,
      text: `HTML`
    },
    {
      img: theme.value == 'light' ? php_lightImage : php_darkImage,
      text: `php`
    },
    {
      img: csharpImage,
      text: `C#`
    }
  ]
  // } else {
  //   return [
  //     {
  //       img: `/assets/skills/nuxt.svg`,
  //       text: `Nuxt Js`
  //     },
  //     {
  //       img: `/assets/skills/vue.svg`,
  //       text: `Vue Js`
  //     },
  //     {
  //       img: `/assets/skills/vuetify.svg`,
  //       text: `Vuetify`
  //     },
  //     {
  //       img: `/assets/skills/pinia.svg`,
  //       text: `Pinia`
  //     },
  //     {
  //       img: `/assets/skills/javascript.svg`,
  //       text: `JavaScript`
  //     },
  //     {
  //       img: `/assets/skills/bootstrap.svg`,
  //       text: `Bootstrap`
  //     },
  //     {
  //       img: `/assets/skills/css.svg`,
  //       text: `CSS`
  //     },
  //     {
  //       img: `/assets/skills/html5.svg`,
  //       text: `HTML`
  //     },
  //     {
  //       img: `/assets/skills/php_dark.svg`,
  //       text: `php`
  //     },
  //     {
  //       img: `/assets/skills/csharp.svg`,
  //       text: `C#`
  //     }
  //   ]
  // }
})
// let skillsImages = []
// for (let i = 0; i < skills.value.length; i++) {
//   // skillsImages.push(import img from  skills.value[i])
// }
</script>
<style lang="scss">
.my-skills {
  padding: 40px 0;
  .container {
    .skills {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
      grid-auto-rows: 1fr;
      direction: var(--dir);

      gap: 20px;
      .skill-box {
        position: relative;
        padding: 3px;
        border-radius: 3px;
        background-color: transparent;
        overflow: hidden;
        .skill-box-container {
          // // border: 2px solid var(--text-color);
          // box-shadow: 0px 0px 5px 0px var(--active-color);
          height: 100%;
          background-color: var(--second-color);
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          transition: box-shadow 0.3s 0.5s;
          padding-bottom: 80px;
          position: relative;
          z-index: 1;
          .skill-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: inherit;
            width: 60%;
            img {
              background-color: inherit;
              max-width: 100%;
              transition: scale 0.3s 0.5s;
              user-select: none;
            }
          }
          .skill-text {
            background-color: transparent;
            margin-top: 10px;
            font-size: 30px;
            font-weight: bold;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translate(-50%);
            white-space: nowrap;
            transition: color 0.3s 0.5s;
          }
          &:hover .skill-text {
            transition: color 0.3s;
            color: var(--active-color);
          }
          &:hover img {
            transition: scale 0.3s;
            scale: 1.1;
          }
        }

        .back-border {
          position: absolute;
          inset: -30%;
          background-image: conic-gradient(
            from 0deg,
            transparent 0%,
            var(--active-color) 25%,
            var(--active-color) 50%,
            transparent 50%,
            var(--active-color) 75%,
            var(--active-color) 100%
          );
          z-index: 0;
          animation: rotate 20s linear infinite;
        }
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
@media (max-width: 575px) {
  .my-skills {
    .container {
      .skills {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        .skill-box {
          .skill-box-container {
            .skill-text {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .my-skills {
    .container {
      .skills {
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        .skill-box {
          .skill-box-container {
            .skill-text {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
