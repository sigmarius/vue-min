<template>
  <div class="app">
    <h1 class="mb-2">Страница с постами</h1>
    <input type="text" v-model.number="modificatorValue">
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
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";

export default {
  components: {UiButton, UiModal, PostList, PostForm },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Коронованный герцог графства не позволил союзу развалиться",
          description:
            "Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы и по сей день остаются уделом либералов, которые жаждут быть функционально разнесены на независимые элементы.",
        },
        {
          id: 2,
          title:
            "Логотип крупнейшей компании по производству мыльных пузырей оправдал надежды граждан",
          description:
            "Противоположная точка зрения подразумевает, что интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ограничены исключительно образом мышления.",
        },
        {
          id: 3,
          title: "Коронованный герцог графства продолжает удивлять",
          description:
            "Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект однозначно определяет каждого участника как способного принимать собственные решения касаемо экспериментов, поражающих по своей масштабности и грандиозности.",
        },
      ],
      isModalShow: false,
      modificatorValue: ''
    };
  },
  methods: {
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
