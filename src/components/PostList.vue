<script setup lang="ts">
import Post from './Post.vue';
</script>

<template>
  <section class="post-list">
    <Post v-for="post in 10" :key="post" />
  </section>
</template>

<style lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 350px;
  gap: 1rem;
  padding: 1rem;
}
</style>
