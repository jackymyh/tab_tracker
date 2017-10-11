<template>
  <panel title="YouTube Video">
    <div class="videoWrapper">
      <iframe :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ],
  computed: {
    youtubeUrl () {
      return 'https://www.youtube.com/embed/' + this.youtubeId
    }
  }
}
</script>

<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
