<template>
  <footer>
    <div class="container">
      designed with<span class="heart"> <font-awesome-icon :icon="['far', 'heart']" /> </span>by
      <span class="colored">Anas taleb agha</span>
    </div>
  </footer>
</template>
<script setup></script>
<style lang="scss">
footer {
  margin-top: auto;
  .container {
    font-size: 19px;
    text-align: center;
    padding: 5px 0;
    span.heart {
      margin: 0 3px;
      * {
        fill: var(--red);
      }
    }
    span.colored {
      color: var(--active-color);
    }
  }
}
</style>
