<template>
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

      <v-btn
        dark
        class="teal"
        @click="navigateTo({
          name: 'Song-edit',
          params: {
            songId: song.id
          }
        })">
        Edit Song
      </v-btn>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl"/>
        <br>
        <div class="song-album">
          {{song.album}}
        </div>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
  width: 100%;
  margin: 0 auto;
}
</style>
