// import Vue from 'vue'

export default {
  SET_ITEMS: (state, { response }) => {
    state.topicsLists = response.data
  },
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },
  SET_DETAIL: (state, { response }) => {
    state.topicDetail = response.data
  }
}
