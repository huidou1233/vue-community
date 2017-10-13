export default {
  tab (state) {
    return 'all'
  },
  items (state) {
    return state.topicsLists
  },
  item (state) {
    return state.topicDetail
  },
  accesstoken (state) {
    return state.accesstoken
  }
}
