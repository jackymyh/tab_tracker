<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="lyrics"/>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
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
