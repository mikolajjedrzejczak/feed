<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="not-found">
    <i class="pi pi-exclamation-triangle"></i>
    <p>Sorry, the page you're looking for could not be found.</p>
    <RouterLink to="/">Go back</RouterLink>
  </section>
</template>

<style lang="scss">
.not-found {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    font-size: 5rem;
    text-align: center;
    color: #f5f53c;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
  }

  a {
    display: block;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid $secondary;
    border-radius: 0.3rem;
    margin-top: 1rem;
    padding: 0.4rem 1rem;
  }
}
</style>
