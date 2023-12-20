<template>
  <div class="posts" v-if="posts.length">
    <h2>Список постов</h2>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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

  .posts {
    margin-bottom: 20px;
  }

/*  стили для <transition-group name="post-list"> */
  .post-list-item {
  display: inline-block;
  margin-right: 10px;
  }

  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.3s ease;
  }

  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .post-list-move {
    transition: transform 0.3s ease;
  }
</style>
