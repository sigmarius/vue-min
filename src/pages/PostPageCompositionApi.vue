<template>
  <div>
    <h1 class="mb-2">Страница с постами</h1>
    <ui-input-text
      v-model="searchQuery"
      placeholder="Поиск..."
      class="mb-2"
      v-focus
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
    <div class="mb-2" v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";
import UiSelect from "@/components/UI/UiSelect.vue";
import UiInputText from "@/components/UI/UiInputText.vue";


export default {
  components: { UiInputText, UiSelect, UiButton, UiModal, PostList, PostForm },
  data() {
    return {
      isModalShow: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
        { value: "id", name: "По id" },
      ],
    };
  },
  setup(props) {
      const {posts, isPostsLoading, totalPages} = usePosts(10);
      const {selectedSort, sortedPosts} = useSortedPosts(posts);
      const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);
      
      return {
          posts,
          isPostsLoading,
          totalPages,
          selectedSort,
          searchQuery,
          sortedAndSearchedPosts
      }
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
