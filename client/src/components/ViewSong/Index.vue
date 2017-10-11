<template>
  <div>
    <v-layout>
      <v-flex xs5>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs7 ml-3>
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs5 mt-3>
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>

      <v-flex xs7 ml-3 mt-3>
        <tab :tab="song.tab"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/songsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
</style>
