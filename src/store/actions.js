import {
  fetchTopicsItems,
  fetchTopicsById,
  fetchLogin
} from '../api'

export default {

  FETCH_LIST_DATA: ({ commit, dispatch, state }, { tab, page = 1 }) => {
    return fetchTopicsItems(tab, page).then(response => commit('SET_ITEMS', { response }))
  },

  ENSURE_ACTIVE_ITEMS: ({ dispatch }, { tab }) => {
    return dispatch('FETCH_ITEMS', {tab: tab})
  },

  FETCH_ITEMS: ({ commit, state }, {tab}) => {
    if (typeof tab === 'object') {
      return fetchTopicsItems(tab.tab, tab.page).then(response => commit('SET_ITEMS', { response }))
    } else {
      return fetchTopicsItems(tab).then(response => commit('SET_ITEMS', { response }))
    }
  },

  FETCH_ITEM: ({ commit }, { id }) => {
    return fetchTopicsById(id).then(response => commit('SET_DETAIL', {response}))
  },

  FETCH_LOGIN: ({commit}, { accesstoken }) => {
    return fetchLogin(accesstoken).then(response => {
      if (response.data.success === true) {
        commit('SET_ACCESSTOKEN', {accesstoken})
      }
    })
  },

  FETCH_TOTAL: ({ commit }, { tab }) => {
    if (tab === '' || tab === 'all') {
      commit('SET_TOTAL', 910)
    } else if (tab === 'good') {
      commit('SET_TOTAL', 25)
    } else if (tab === 'weex') {
      commit('SET_TOTAL', 10)
    } else if (tab === 'share') {
      commit('SET_TOTAL', 220)
    } else if (tab === 'ask') {
      commit('SET_TOTAL', 670)
    } else if (tab === 'job') {
      commit('SET_TOTAL', 40)
    }
  },

  CHANGE_TAB: ({ commit }, { tab }) => {
    commit('SET_TAB', tab)
  }
}
