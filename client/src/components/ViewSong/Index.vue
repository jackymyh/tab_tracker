<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 ml-3>
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6 mt-3>
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>

      <v-flex xs6 ml-3 mt-3>
        <tab :tab="song.tab"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/songsService'
import SongHistoryService from '@/services/songHistoryService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import {mapState} from 'vuex'
export default {
  components: {
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
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    SongHistoryService.add({
      userId: this.user.id,
      songId: songId
    })
  }
}
</script>

<style scoped>
</style>
