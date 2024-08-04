import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
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
          response.data.map(async (post: any) => {
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
  },
  getters: {
    posts: (state) => state.posts,
    currentPage: (state) => state.currentPage,
    totalPages: (state) => state.totalPages,
    isLoading: (state) => state.isLoading,
  },
});
