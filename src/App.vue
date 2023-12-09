<template>
  <div class="app">
    <post-form/>
    <post-list
      :posts="posts"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: { PostList, PostForm },
  data() {
    return {
      title: "",
      description: "",
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
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        description: this.description,
      };

      this.posts = [newPost, ...this.posts];
      this.title = "";
      this.description = "";
    },
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
</style>
