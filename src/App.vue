<template>
  <div class="app">
    <post-form
      @create="createPost"
    />
    <post-list
      :posts="posts"
      @remove="removePost"
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
    createPost(post, second, third) {
      this.posts = [post, ...this.posts]

      console.log('simple param', second);
      console.log('simple param', third);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
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
</style>
