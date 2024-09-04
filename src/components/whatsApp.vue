<template>
  <div class="whats-app">
    <a href="https://wa.me/+963980791411" target="_blank"
      ><img loading="lazy" src="@/assets/whatsapp.svg" alt=""
    /></a>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.whats-app {
  //   width: 50px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 20;
  animation: whats-app 3s infinite linear alternate;
  background-color: transparent;
  transition: 0.3s;
  a {
    background-color: inherit;
    img {
      background-color: inherit;
      width: 100%;
      text-shadow: 0 0 red;
      filter: drop-shadow(0 0 10px var(--text-color));
    }
  }
  &:hover {
    transform: scale(1.3);
    animation: none;
  }
  &:hover img {
    filter: none;
  }
}
@keyframes whats-app {
  0% {
    scale: 1;
  }
  66% {
    scale: 1;
  }
  100% {
    scale: 1.2;
  }
}
</style>
