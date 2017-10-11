<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="tab"/>
  </panel>
</template>

<script>
export default {
  props: [
    'tab'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 600px;
  font-family: monospace;
  padding: 40px;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
