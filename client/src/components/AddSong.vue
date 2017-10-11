<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Song Title"
          required
          :rules=[required]
          v-model="song.title">
        </v-text-field>
        <v-text-field
          label="Artist"
          required
          :rules=[required]
          v-model="song.artist">
        </v-text-field>
        <v-text-field
          label="Album"
          required
          :rules=[required]
          v-model="song.album">
        </v-text-field>
        <v-text-field
          label="Album Image URL"
          required
          :rules=[required]
          v-model="song.albumImageUrl">
        </v-text-field>
        <v-text-field
          label="Genre"
          required
          :rules=[required]
          v-model="song.genre">
        </v-text-field>
        <v-text-field
          label="Youtube ID"
          required
          :rules=[required]
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Sheet" class="ml-3">
        <v-text-field
          label="Lyrics"
          multi-line
          required
          :rules=[required]
          v-model="song.lyrics">
        </v-text-field>
        <v-text-field
          label="Tab"
          multi-line
          required
          :rules=[required]
          v-model="song.tab">
        </v-text-field>
      </panel>
      <br>
      <div class="danger-alert" v-html="error"/>
      <br>
      <v-btn dark class="teal"
        @click="add">
        Add Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/songsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  components: {
    Panel
  },
  methods: {
    async add () {
      const allFieldsFilled = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!allFieldsFilled) {
        this.error = 'Please fill in all fields'
        return
      }
      try {
        await SongsService.addSong(this.song)
        this.$router.push({
          name: 'Songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
