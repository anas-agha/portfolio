<template>
  <div class="about-me">
    <div class="container">
      <sectionHeading :title="$t('about')"> </sectionHeading>
      <div class="content">
        <p v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1 }">
          {{ $t('about me content') }}
        </p>
        <div
          v-motion
          :initial="{ scale: 0, y: 100 }"
          :visible="{ scale: 1, y: 0 }"
          :duration="600"
          class="image-container"
        >
          <img src="../assets/4674889.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import sectionHeading from './sectionHeading.vue'
</script>
<style lang="scss">
.about-me {
  padding: 40px 0;
  direction: var(--dir);
  .content {
    direction: var(--dir);
    display: flex;
    gap: 20px;
    p {
      font-size: 33px;
      font-weight: bold;
      width: 66.666%;
    }
    .image-container {
      width: 33.333%;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 1199px) {
  .about-me {
    .content {
      p {
        font-size: 30px;
      }
    }
  }
}
@media (max-width: 991px) {
  .about-me {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 25px;
        width: 100%;
      }
      .image-container {
        width: 50%;
        order: -1;
      }
    }
  }
}
@media (max-width: 575px) {
  .about-me {
    .content {
      p {
        font-size: 20px;
        width: 100%;
      }
      .image-container {
        width: 80%;
        order: -1;
      }
    }
  }
}
</style>
