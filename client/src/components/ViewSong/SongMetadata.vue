<template>
  <panel
    style="height:100%"
    title="Song Metadata">
    <v-layout>
      <v-flex xs6 ma-2 pa-4>
        <div class="song-title">
          <strong>Song Title: </strong>{{song.title}}
        </div>
        <v-divider></v-divider>
        <div class="song-artist">
          <strong>Artist: </strong>{{song.artist}}
        </div>
        <v-divider></v-divider>
        <div class="song-genre">
          <strong>Artist: </strong>{{song.genre}}
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

      <v-flex xs6 ma-2>
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
          songId: this.song.id
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
          songId: this.song.id
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
.album-image {
  width: 100%;
  margin: 0 auto;
}
</style>
