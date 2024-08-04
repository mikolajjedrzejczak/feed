import { createStore } from 'vuex';
import axios from 'axios';

interface Post {
  id: number;
  author: string;
  title: string;
  body: string;
  userId: number;
}

export default createStore({
  state: {
    posts: [] as Post[],
    currentPage: 1,
    perPage: 10,
    totalPages: 0,
    isLoading: true,
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_TOTAL_PAGES(state, totalPages) {
      state.totalPages = totalPages;
    },
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchPosts({ commit, state }) {
      try {
        const { currentPage, perPage } = state;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: currentPage,
              _per_page: perPage,
            },
          }
        );

        const posts = await Promise.all(
          response.data.map(async (post: Post) => {
            const userResponse = await axios.get(
              `https://jsonplaceholder.typicode.com/users/${post.userId}`
            );
            post.author = userResponse.data.name;
            return post;
          })
        );

        commit('SET_POSTS', posts);
        commit(
          'SET_TOTAL_PAGES',
          Math.ceil(response.headers['x-total-count'] / perPage)
        );
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_IS_LOADING', false);
      }
    },
    changePage({ commit, dispatch }, page) {
      commit('SET_CURRENT_PAGE', page);
      dispatch('fetchPosts');
    },
    async deletePost({ commit }, postId) {
      try {
        // await axios.delete(`/api/posts/${postId}`);
        commit(
          'SET_POSTS',
          this.state.posts.filter((post: Post) => post.id !== postId)
        );
        console.log('Post has been deleted successfully!');
      } catch (error) {
        console.error('Error deliting the post!');
      }
    },
  },
  getters: {
    posts: (state) => state.posts,
    currentPage: (state) => state.currentPage,
    totalPages: (state) => state.totalPages,
    isLoading: (state) => state.isLoading,
  },
});
