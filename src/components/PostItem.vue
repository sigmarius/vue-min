<template>
  <div class="post" :data-id="post.id">
    <div>
      <div><b>id:</b> {{ post.id }}</div>
      <div><b>Название:</b> {{ post.title }}</div>
      <div><b>Описание:</b> {{ post.body }}</div>
    </div>

    <div class="post__btns">
      <ui-button
          @click="$router.push(`/posts/${post.id}`)"
        >
          Открыть
        </ui-button>
      <ui-button
        @click="$emit('remove', post)"
      >
        Удалить
      </ui-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid teal;
}
.post__btns {
  display: flex;
  gap: 5px;
}
</style>
