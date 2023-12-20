<template>
  <div class="app">
    <h1 class="mb-2">Страница с постами</h1>
    <ui-input-text
      v-model="searchQuery"
      placeholder="Поиск..."
      class="mb-2"
    />
    <div class="app__buttons mb-2">
      <ui-button @click="showModal"> Создать пост</ui-button>
      <ui-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <ui-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </ui-modal>
    <!-- computed свойство подставляется в модель :posts -->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <ul class="page__wrapper">
      <li
        v-for="page in totalPages"
        :key="page"
        class="page"
      >
          {{ page }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";
import UiSelect from "@/components/UI/UiSelect.vue";
import UiInputText from "@/components/UI/UiInputText.vue";

export default {
  components: {UiInputText, UiSelect, UiButton, UiModal, PostList, PostForm },
  data() {
    return {
      posts: [],
      isModalShow: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: "title", name: "По названию"},
        {value: "body", name: "По описанию"},
        {value: "id", name: "По id"},
      ],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {params: {
            _page: this.page,
            _limit: this.limit
          }}
        );
//       общее количество предоставляемых ресурсом постов отображается на вкладке Network -> Headers в браузере
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        ); // 101 post / 10 limit => 11 pages
        console.log('total', this.totalPages);
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
    compareString(post1, post2) {
      return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
    },
    compareNumeric(post1, post2) {
      return post1[this.selectedSort] - post2[this.selectedSort];
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
//    название функции может быть любым
    sortedPosts() {
//      исходный массив мутироваться не будет
      return this.selectedSort === 'id'
      ? [...this.posts].sort(this.compareNumeric)
      : [...this.posts].sort(this.compareString)
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(
        post => post.title.toLowerCase()
              .includes(this.searchQuery.toLowerCase())
      );
    }
  },
//  watch: {
////    функция-наблюдатель имеет такое же название, как и модель, за которой она смотрит
//    selectedSort(newValue) {
////      также можно использовать передаваемое newValue
////      в данном случае функция sort() мутирует исходный массив
//      newValue === 'id'
//      ? this.posts.sort(this.compareNumeric)
//      : this.posts.sort(this.compareString);
//    },
//  }
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
