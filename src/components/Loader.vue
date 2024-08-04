<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
</script>

<template>
  <div class="loader">
    <PulseLoader color="#393939" size="15px" margin="2px" />
  </div>
</template>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $primary;
}
</style>
