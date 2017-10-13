<template>
  <v-layout>
    <v-flex
      xs3
      ma-2 
      v-if="isUserLoggedIn">
      <song-bookmarks/>
      <recent-songs class="mt-2"/>
    </v-flex>
    <v-flex
      :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }"
      ma-2>
      <song-search/>
      <song-list class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
import SongList from '@/components/Songs/SongList'
import SongSearch from '@/components/Songs/SongSearch'
import SongBookmarks from '@/components/Songs/SongBookmarks'
import RecentSongs from '@/components/Songs/RecentSongs'
import {mapState} from 'vuex'
export default {
  components: {
    SongList,
    SongSearch,
    SongBookmarks,
    RecentSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.showAll()).data
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
