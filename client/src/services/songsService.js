import api from '@/services/api'

export default {
  showAll () {
    return api().get('songs')
  },
  show (songId) {
    return api().get(`songs/${songId}`)
  },
  addSong (song) {
    return api().post('songs', song)
  }
}
