<template>
  <input
    type="text"
    class="input"
    :value="value"
    @input="updateInput"
  />
</template>

<script>
export default {
    name: 'ui-input-text',
    props: {
      value: [String, Number]
    },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
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
