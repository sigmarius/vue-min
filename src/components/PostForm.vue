<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <ui-input-text
      placeholder="Название"
      v-model:somevalue="post.title"
    />
    <ui-input-text
      placeholder="Описание"
      v-model="post.description"
    />
    <ui-button class="btn--create" @click="createPost"> Создать </ui-button>
  </form>
</template>

<script>
import UiInputText from "@/components/UI/UiInputText.vue";

export default {
  components: { UiInputText },
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
      this.$emit("create", this.post, "second param", "another param");

      this.post = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn--create {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
