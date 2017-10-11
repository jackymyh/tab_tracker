import api from '@/services/api'

export default {
  index (bookmark) {
    return api().get('bookmarks', {
      params: bookmark
    })
  },
  add (bookmark) {
    return api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return api().get(`bookmarks/${bookmarkId}`)
  }
}
