<template>
  <div class="app">
    <h1 class="mb-2">Страница с постами</h1>
    <div class="app__buttons mb-2">
      <ui-button @click="showModal"> Создать пост</ui-button>
      <ui-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <ui-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </ui-modal>
    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";
import UiSelect from "@/components/UI/UiSelect.vue";

export default {
  components: { UiSelect, UiButton, UiModal, PostList, PostForm },
  data() {
    return {
      posts: [],
      isModalShow: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {value: "title", name: "По названию"},
        {value: "body", name: "По описанию"},
      ],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
        );
        this.posts = response.data;
        this.isPostsLoading = false;
      } catch (e) {
        alert("Ошибка " + e);
      } finally {
        this.isPostsLoading = false;
      }
    },
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
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 20px;
}
</style>
