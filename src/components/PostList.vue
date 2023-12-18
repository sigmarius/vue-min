<template>
  <div v-if="posts.length">
    <h2>Список постов</h2>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else class="no-posts">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  .no-posts {
    color: red;
  }
</style>
