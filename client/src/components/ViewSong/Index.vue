<template>
  <v-layout>
    <v-flex xs4>
      <song-metadata :song="song"/>
    </v-flex>

    <v-flex xs8 ml-3>
      <you-tube :youtubeId="song.youtubeId"/>
    </v-flex>
  </v-layout>

  <!-- <v-layout>
    <v-flex xs8 class="ml-3">
      <panel title="Tab">
        <textarea
          readonly
          v-model="song.tab"/>
      </panel>
    </v-flex>
  </v-layout> -->
</template>

<script>
import SongsService from '@/services/songsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    SongMetadata,
    YouTube
  },
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
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
