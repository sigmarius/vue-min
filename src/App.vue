<template>
  <div class="app">
    <h1 class="mb-2">Страница с постами</h1>
    <ui-button @click="fetchPosts">Получить посты</ui-button>
    <ui-button class="mb-2" @click="showModal">
      Создать пост
    </ui-button>
    <ui-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </ui-modal>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";

export default {
  components: {UiButton, UiModal, PostList, PostForm },
  data() {
    return {
      posts: [],
      isModalShow: false,
      modificatorValue: ''
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
          alert('Ошибка ' + e)
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
      this.isModalShow = true
    }
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

.mb-2 {
  margin-bottom: 20px;
}
</style>
