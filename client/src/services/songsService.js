import api from '@/services/api'

export default {
  showAll (search) {
    return api().get('songs', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return api().get(`songs/${songId}`)
  },
  addSong (song) {
    return api().post('songs', song)
  },
  editSong (song) {
    return api().put(`songs/${song.id}`, song)
  }
}
