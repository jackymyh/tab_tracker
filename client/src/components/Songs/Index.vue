<template>
  <v-layout>
    <v-flex xs3>
      <song-bookmarks/>
      <recent-songs class="mt-3"/>
    </v-flex>
    <v-flex xs6 ml-3>
      <song-search/>
      <song-list class="mt-3"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
import SongList from '@/components/Songs/SongList'
import SongSearch from '@/components/Songs/SongSearch'
import SongBookmarks from '@/components/Songs/SongBookmarks'
import RecentSongs from '@/components/Songs/RecentSongs'
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
