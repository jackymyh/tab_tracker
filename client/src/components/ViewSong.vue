<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
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
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl"/>
            <br>
            <div class="song-album">
              {{song.album}}
            </div>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs6>
      <panel title="Youtube">
        <!-- something -->
      </panel>
    </v-flex>
  </v-layout>

    <v-flex xs8 class="ml-3">
      <panel title="Tab">
        <textarea
          readonly
          v-model="song.tab"/>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
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
