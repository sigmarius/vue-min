<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  color: teal;
  border: 1px solid teal;
  border-radius: 5px;
  background: none;
  cursor: pointer;
}
</style>
