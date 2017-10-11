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

        <v-btn
          dark
          class="teal"
          :to="{
            name: 'Song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          dark
          class="teal"
          v-if="isUserLoggedIn && !bookmark"
          @click="setBookmark">
          Bookmark
        </v-btn>

        <v-btn
          dark
          class="teal"
          v-if="isUserLoggedIn && bookmark"
          @click="unsetBookmark">
          Unbookmark
        </v-btn>
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
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/bookmarksService'
export default {
  data () {
    return {
      bookmark: null
    }
  },
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarksService.add({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
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
  width: 100%;
  margin: 0 auto;
}
</style>
