<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import Post from './Post.vue';
import Pagination from './Pagination.vue';
import Loader from './Loader.vue';

const store = useStore();

const posts = computed(() => store.getters.posts);
const isLoading = computed(() => store.getters.isLoading);
const fetchPosts = () => store.dispatch('fetchPosts');

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <section class="post-list">
    <Post v-if="!isLoading" v-for="post in posts" :key="post.id" :post="post" />
    <Loader v-else />
    <Pagination />
  </section>
</template>

<style lang="scss">
.post-list {
  display: flex;
  flex-direction: column;

  min-width: 350px;
  gap: 1rem;
  padding: 1rem;
}


</style>
