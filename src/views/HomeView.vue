<script setup lang="ts">
import PostList from '../components/PostList.vue';
</script>

<template>
  <div class="wrapper">
    <PostList />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $primary;
}
</style>
