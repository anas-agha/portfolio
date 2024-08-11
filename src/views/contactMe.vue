<template>
  <div class="contact-me pattern">
    <div class="container">
      <sectionHeading :title="$t('contact me')"></sectionHeading>
      <div class="contacts">
        <div
          v-motion
          :initial="{ opacity: 0, x: index % 2 == 0 ? -50 : 50, scale: 0.8 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="index * 300"
          :duration="300"
          v-for="(contact, index) in contacts"
          :key="index"
          class="content"
        >
          <a :href="contact.link" target="_blank" class="contact">
            <div class="icon"><font-awesome-icon :icon="contact.icon" /></div>
            <div class="text">{{ $t(contact.name) }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import sectionHeading from '@/components/sectionHeading.vue'
import { ref } from 'vue'
const contacts = ref([
  {
    link: 'https://wa.me/+963980791411',
    icon: ['fab', 'whatsapp'],
    name: 'whatsapp'
  },
  {
    link: 'https://www.linkedin.com/in/anas-taleb-agha-657968283',
    icon: ['fab', 'linkedin-in'],
    name: 'linkedin'
  },
  {
    link: 'mailto:anas.agha.dev@gmail.com',
    icon: ['fas', 'envelope'],
    name: 'email'
  },
  {
    link: '',
    icon: ['fab', 'facebook'],
    name: 'facebook'
  },
  {
    link: 'https://t.me/anasagha1',
    icon: ['fab', 'telegram'],
    name: 'telegram'
  }
])
</script>
<style lang="scss">
.contact-me {
  min-height: calc(100vh - 60px);
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .content {
      position: relative;
      padding: 3px;
      z-index: 1;
      border-radius: 3px;
      overflow: hidden;
      width: 500px;
      max-width: 100%;
      transition: scale 0.3s;
      &:hover {
        scale: 0.95;
      }
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        inset: -300%;
        background-image: conic-gradient(
          from 0deg,
          transparent 0%,
          var(--active-color) 25%,
          var(--active-color) 50%,
          transparent 50%,
          var(--active-color) 75%,
          var(--active-color) 100%
        );
        animation: rotate 10s linear infinite;
      }
      .contact {
        direction: var(--dir);
        border-radius: 3px;
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 25px;
        padding: 10px 30px;
        background-color: var(--second-color);
        text-transform: capitalize;

        .icon {
          svg {
            width: 30px;
            height: 30px;
          }
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
</style>
