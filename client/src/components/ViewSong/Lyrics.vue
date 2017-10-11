<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="lyrics"/>
  </panel>
</template>

<script>
export default {
  props: [
    'lyrics'
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
