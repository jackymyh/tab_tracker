<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      to="songs/add"
      class="teal accent-4"
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>
    <div
      v-for="song in songs"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn
            dark
            class="teal"
            :to="{
              name: 'Song',
              params: {
                songId: song.id
              }
            }">
            View Song
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/songsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.showAll(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song-title {
  font-size: 30px;
  margin: 5px;
  overflow: hidden;
}
.song-artist {
  font-size: 20px;
}
.song-genre {
  font-size: 20px;
}
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
