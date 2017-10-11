import api from '@/services/api'

export default {
  index (user) {
    return api().get('histories', {
      params: user
    })
  },
  add (history) {
    return api().post('histories', history)
  }
}
