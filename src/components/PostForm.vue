<template>
  <form @submit.prevent>
    <h1>Создание поста</h1>
    <input
      class="input"
      type="text"
      placeholder="Название"
      :value="post.title"
      @input="post.title = $event.target.value"
    />
    <input
      class="input"
      type="text"
      placeholder="Описание"
      :value="post.description"
      @input="post.description = $event.target.value"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        description: ''
      }
    }
  }
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
