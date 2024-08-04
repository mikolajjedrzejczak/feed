<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

interface Post {
  id: number;
  author: string;
  title: string;
  body: string;
}

const props = defineProps({
  post: {
    type: Object as () => Post,
    required: false,
    default: () => ({
      id: 0,
      author: 'Test Author',
      title: 'Default Title',
      body: 'Default Body',
      avatar: 'asdad',
    }),
  },
});

const store = useStore();

const showFullContent = ref(false);

const toggleFullDescription = () => {
  showFullContent.value = !showFullContent.value;
};

const truncatedContent = computed(() => {
  let description = props.post.body;
  if (!showFullContent.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});

const handleDeletePost = (postId: number) => {
  store.dispatch('deletePost', postId);
};
</script>

<template>
  <div class="post">
    <div class="post-header">
      <div class="post-top">
        <span>{{ props.post.author }}</span>
        <h4 class="post-title">{{ props.post.title }}</h4>
      </div>
      <div class="post-id">#{{ props.post.id }}</div>
    </div>
    <div class="post-content">
      <div>
        {{ truncatedContent }}
      </div>
      <button class="show-more-btn" @click="toggleFullDescription">
        {{ showFullContent ? 'Less' : 'More' }}
      </button>

      <div class="post-option">
        <button @click="handleDeletePost(props.post.id)" class="del-btn">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post {
  background-color: $secondary;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: $font;

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .post-top {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: bold;

      .post-title {
        font-size: 0.7rem;
        margin-left: 0.5rem;
        padding-left: 1rem;
        border-left: 2px solid $primary;
      }
    }

    .post-id {
      font-size: 0.8rem;
    }
  }

  .post-content {
    p {
      font-size: 1rem;
    }

    .show-more-btn {
      background-color: $primary;
      color: $font;
      border: none;
      border-radius: 5px;
      padding: 0.1rem;
      cursor: pointer;
    }
  }

  .post-option {
    display: flex;
    justify-content: flex-end;

    .del-btn {
      background-color: #a10a0aab;
      color: $font;
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
}
</style>
