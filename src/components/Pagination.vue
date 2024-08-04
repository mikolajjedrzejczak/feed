<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const currentPage = computed(() => store.getters.currentPage);
const totalPages = computed(() => store.getters.totalPages);

const changePage = (page: any) => store.dispatch('changePage', page);
</script>

<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      <i class="pi pi-arrow-circle-left"></i>
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      <i class="pi pi-arrow-circle-right"></i>
    </button>
  </div>
</template>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;

  button {
    margin: 0 5px;
    background-color: transparent;
    border: none;
    color: $font;
    font-size: 1.4rem;
    cursor: pointer;
  }
}
</style>
