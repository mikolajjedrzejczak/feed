<script setup lang="ts">
import { VueSpinner } from 'vue3-spinners';
</script>

<template>
  <div class="loader">
    <VueSpinner color="#393939" size="90"/>
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
