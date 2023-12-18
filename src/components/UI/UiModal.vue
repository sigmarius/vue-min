<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.modal__content {
  margin: auto;
  padding: 20px;
  min-height: 50px;
  min-width: 300px;
  background: white;
  border-radius: 12px;
}
</style>
