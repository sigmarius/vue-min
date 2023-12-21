<template>
  <div>
    <h1 class="mb-2">Страница с постами</h1>
    <ui-input-text
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
      class="mb-2"
      v-focus
    />
    <div class="app__buttons mb-2">
      <ui-button @click="showModal"> Создать пост</ui-button>
      <ui-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>

    <ui-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </ui-modal>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div class="mb-2" v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";
import UiSelect from "@/components/UI/UiSelect.vue";
import UiInputText from "@/components/UI/UiInputText.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: { UiInputText, UiSelect, UiButton, UiModal, PostList, PostForm },
    data() {
      return {
        posts: [],
        isModalShow: false,
      };
    },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
    createPost(post) {
      this.posts = [post, ...this.posts];
      this.isModalShow = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.isModalShow = true;
    },
  },
  mounted() {
        this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts"
    })
  },
  watch: {
    //    функция-наблюдатель имеет такое же название, как и модель, за которой она смотрит
  },
};
</script>

<style>
.page__wrapper {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  list-style-type: none;
}

.page {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}
</style>
