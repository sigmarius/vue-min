<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
export default {
    name: 'ui-input-text',
    props: {
      modelValue: [String, Number]
    },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  border: 2px solid teal;
  border-radius: 5px;
}
</style>
