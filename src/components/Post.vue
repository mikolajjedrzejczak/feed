<script setup lang="ts"></script>

<template>
  <div class="post">
    <div class="post-header">
      <div class="author">
        <img src="" alt="avatar" />
        <span>Author</span>
      </div>
      <div class="id">post id</div>
    </div>
    <div class="post-content">
      <p>post content</p>
    </div>
    <div class="post-option">
      <button class="del-btn">Delete</button>
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
  min-width: 50%;

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .author {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      span {
        font-weight: bold;
      }
    }

    .id {
      font-size: 0.8rem;
    }
  }

  .post-content {
    p {
      font-size: 1rem;
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
