import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По описанию" },
      { value: "id", name: "По id" },
    ],
  }),
  getters: {
    //        computed свойства
    sortedPosts(state) {
      return state.selectedSort === "id"
        ? [...state.posts].sort(
            (post1, post2) =>
              post1[state.selectedSort] - post2[state.selectedSort]
          )
        : [...state.posts].sort((post1, post2) =>
            post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
          );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },
  mutations: {
    //        предназначены для изменения состояния state
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    //      внутри себя отправляет запрос и изменяет состояние
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true); // передаем название мутации -> данные, которые хотим передать
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit),
        );
        commit("setPosts", response.data);
      } catch (e) {
        alert("Ошибка " + e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit),
        );

        commit("setPosts", [...state.posts, ...response.data]);
      } catch (e) {
        alert("Ошибка " + e);
      }
    },
  },
  namespaced: true,
};
