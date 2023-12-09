<template>
  <div class="app">
    <form @submit.prevent>
      <h1>Создание поста</h1>
      <input
        class="input"
        type="text"
        placeholder="Название"
        :value="title"
        @input="title = $event.target.value"
      />
      <input
        class="input"
        type="text"
        placeholder="Описание"
        :value="description"
        @input="description = $event.target.value"
      />
      <button
        class="btn"
        @click="createPost">
          Создать
      </button>
    </form>
    <div class="post" v-for="post in posts">
      <div><b>Название:</b> {{ post.title }}</div>
      <div><b>Описание:</b> {{ post.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
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
        description: this.description
      }

      this.posts = [newPost, ...this.posts];
      this.title = '';
      this.description = '';
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

.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  border: 2px solid teal;
  border-radius: 5px;
}

.btn {
  margin-top: 15px;
  padding: 10px 15px;
  align-self: flex-end;
  color: teal;
  border: 1px solid teal;
  border-radius: 5px;
  background: none;
  cursor: pointer;
}
</style>
