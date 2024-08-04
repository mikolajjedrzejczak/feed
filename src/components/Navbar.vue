<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const search = ref('');
const isActiveMenu = ref(false);

const handleSearch = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    console.log(search.value);
  }
};

const handleActiveMenu = () => {
  isActiveMenu.value = isActiveMenu.value === true ? false : true;
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">FEED</RouterLink>
    </div>
    <div :class="`search-input ${isActiveMenu && 'active'}`">
      <input
        @keydown="handleSearch"
        v-model="search"
        type="text"
        placeholder="search user..."
      />
    </div>
    <div :class="`links ${isActiveMenu && 'active'}`">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts/add" class="add-post">Add Post</RouterLink>
    </div>
    <div class="burger">
      <i @click="handleActiveMenu" v-if="!isActiveMenu" class="pi pi-bars"></i>
      <i @click="handleActiveMenu" v-else class="pi pi-times"></i>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  background-color: $primary;
  color: $font;
  width: 100%;
  height: 70px;
  padding: 0 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $secondary;

  .logo {
    a {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
  }

  .search-input {
    input {
      width: 300px;
      height: 30px;
      border-radius: 5px;
      border: none;
      outline: none;
      padding: 0 10px;
    }
  }

  .links {
    a {
      margin-left: 20px;
    }

    .add-post {
      background-color: $secondary;
      padding: 5px 10px;
      border-radius: 5px;
      color: $font;
    }
  }

  .burger {
    display: none;
  }
}

@media (max-width: 800px) {
  .navbar {
    padding: 10px 20px;
    flex-direction: column;
    gap: 20px;
    height: auto;

    .links,
    .search-input {
      display: none;

      &.active {
        display: block;
      }
    }

    .burger {
      position: absolute;
      display: block;
      font-size: 1.2rem;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }
}
</style>
