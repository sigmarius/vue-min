<template>
  <div class="post">
    <div>
      <div><b>Название:</b> {{ post.title }}</div>
      <div><b>Описание:</b> {{ post.description }}</div>
    </div>

    <div class="post__btns">
      <ui-button>
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
</style>
