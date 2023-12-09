<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <input
      class="input"
      type="text"
      placeholder="Название"
      v-model="post.title"
    />
    <input
      class="input"
      type="text"
      placeholder="Описание"
      v-model="post.description"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post, 'second param', 'another param')

      this.post = {
        title: "",
        description: "",
      }
    },
  },
};
</script>

<style scoped>
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
